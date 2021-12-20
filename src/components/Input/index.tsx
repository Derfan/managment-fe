import { FunctionComponent, forwardRef, useMemo } from "react";
import cns from "classnames";

import * as cn from "./Input.module.css";
import { ChangeHandler } from "react-hook-form";

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
    error?: ErrorType
    onChange: ChangeHandler
    onBlur: ChangeHandler
};

enum DefaultErrorMessages {
    required = 'Field is mandatory'
}

export const Input:FunctionComponent<PropsType> = forwardRef(({ name, type, label, className, placeholder, required, error, onChange, onBlur }, ref:any) => {
    const errorMessage = useMemo(
        () => error ? error.message || DefaultErrorMessages[error.type] : null,
        [error]
    );

    return (
        <div className={cns(cn.inputWrapper, { [cn.error]: error })}>
            {label && (
                <label className={cn.label} htmlFor={name}>
                    {label} {required && '*'}
                </label>
            )}

            <input
                ref={ref}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={cns(cn.inputField, className)}
                onChange={onChange}
                onBlur={onBlur}
            />

            {errorMessage && <span className={cn.errorMessage}>{errorMessage}</span>}
        </div>
    )
})

Input.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    className: "",
    required: false,
};
