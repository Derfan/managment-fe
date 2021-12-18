import { FunctionComponent, useMemo } from "react";
import cns from "classnames";

import cn from "./Input.module.css";

type ValidationType = {
    required?: string|boolean
    maxLength?: {
        value: number
        message: string
    }
    minLength?: {
        value: number
        message: string
    }
    max?: {
        value: number
        message: string
    }
    min?: {
        value: number
        message: string
    }
    pattern?: {
        value: RegExp
        message: string
    }
    validate?: Function|object
};

type ErrorType = {
    type: string
    message: string
}

type PropsType = {
    type?: "text"|"email"|"password"|"tel"|"url"
    name: string
    label?: string
    placeholder?: string
    className?: string
    required?: boolean
    validation?: ValidationType
    error?: ErrorType
    register?: (fieldName:string, config:object) => void
};

enum ErrorMessages {
    required = 'Field is mandatory'
}

export const Input:FunctionComponent<PropsType> = ({ name, type, label, className, placeholder, validation, error, register }) => {
    const errorMessage = useMemo(
        () => error ? error.message || ErrorMessages[error.type] : null,
        [error]
    );

    return (
        <div className={cns(cn.inputWrapper, { [cn.error]: error })}>
            {label && (
                <label className={cn.label} htmlFor={name}>
                    {label} {validation?.required && '*'}
                </label>
            )}

            <input
                {...register(name, validation)}
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                className={cns(cn.inputField, className)}
            />

            {errorMessage && <span className={cn.errorMessage}>{errorMessage}</span>}
        </div>
    )
}

Input.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    className: "",
    required: false,
};
