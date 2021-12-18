import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import cns from "classnames";

import cn from "./Input.module.css";

type InputPropsType = {
    type?: "text"|"email"|"password"|"tel"|"url"
    name: string
    label?: string
    placeholder?: string
    className?: string
    required?: boolean
    error?: string
};

export const Input:FunctionComponent<InputPropsType> = ({ name, type, label, required, className, error, ...rest }) => {    
    return (
        <div className={cns(cn.inputWrapper, { [cn.error]: error })}>
            {label && <label className={cn.label} htmlFor={name}>{label}{required && '*'}</label>}

            <input
                id={name}
                type={type}
                className={cns(cn.inputField, className)}
                {...rest}
            />

            {error && <span className={cn.errorMessage}>{error}</span>}
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
