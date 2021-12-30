import { FunctionComponent, forwardRef, useMemo } from "react";
import cns from "classnames";
import { ChangeHandler } from "react-hook-form";

import { Label } from "../Label";
import * as cn from "./Input.module.css";

type ErrorType = {
    type: string
    message: string
}

type Props = {
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

export const Input:FunctionComponent<Props> = forwardRef(({ name, type, label, className, placeholder, required, error, onChange, onBlur }, ref:any) => {
    const errorMessage = useMemo(
        () => error ? error.message || DefaultErrorMessages[error.type] : null,
        [error]
    );

    return (
        <div className={cns(cn.root, { [cn.error]: error })}>
            {label && <Label htmlFor={name} isError={!!errorMessage} required={required}>{label}</Label>}

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
