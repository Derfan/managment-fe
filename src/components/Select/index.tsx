import { useState, forwardRef, FunctionComponent } from "react";
import cns from "classnames";

import { Label } from "../Label";
import * as cn from "./Select.module.css";
import { ChangeHandler } from "react-hook-form";

type Value = string;

type Props = {
    name: string
    label?: string
    options: Value[]
    defaultValue?: Value
    placeholder?: string
    required?: boolean
    multiple?: boolean
    className?: string
    onChange: ChangeHandler
    onBlur?: ChangeHandler
};

export const Select:FunctionComponent<Props> = forwardRef(({ name, label, options, defaultValue, placeholder, multiple, required, className, onChange, onBlur }, ref:any) => {
    const [value, setValue] = useState(defaultValue);

    const changeHandler = (event) => {
        const { value } = event.target;
        setValue(value);
        onChange(event);
    };

    return (
        <div className={cns(cn.root, className)}>
            {label && <Label htmlFor={name} required={required}>{label}</Label>}

            <select
                ref={ref}
                id={name}
                name={name}
                className={cns(cn.input, { [cn.placeholder]: value === "" })}
                multiple={multiple}
                onChange={changeHandler}
                onBlur={onBlur}
            >
                {!!placeholder && (
                    <option value="">
                        {placeholder}
                    </option>
                )}

                {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
});

Select.defaultProps = {
    label: '',
    placeholder: '',
    className: '',
    defaultValue: '',
    multiple: false,
    required: false,
};
