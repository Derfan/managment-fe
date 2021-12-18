import { FunctionComponent } from "react";
import cns from "classnames";

import cn from "./Input.module.css";

type PropsType = {
    type?: "text"|"email"|"password"|"tel"|"url"
    name: string
    label?: string
    placeholder?: string
    className?: string
    required?: boolean
    error?: string
    register?: (fieldName:string) => void
};

export const Input:FunctionComponent<PropsType> = ({ name, label, required, className, placeholder, error, register }) => {
    return (
        <div className={cns(cn.inputWrapper, { [cn.error]: error })}>
            {label && <label className={cn.label} htmlFor={name}>{label}{required && '*'}</label>}

            <input
                {...register(name)}
                id={name}
                name={name}
                className={cns(cn.inputField, className)}
                placeholder={placeholder}
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
