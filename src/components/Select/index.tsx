import { useState, forwardRef, FunctionComponent } from "react";
import cns from "classnames";

import { Label } from "../Label";
import * as cn from "./Select.module.css";

type Value = string;

type Props = {
    name: string
    label?: string
    options: Value[]
    defaultValue?: Value
    placeholder?: string
    required?: boolean
    className?: string
    onChange: (value:Value) => void
};

export const Select:FunctionComponent<Props> = forwardRef(({ name, label, options, defaultValue, placeholder, required, className, onChange }, ref:any) => {
    const [value, setValue] = useState(defaultValue);

    const changeHandler = (event) => {
        const { value } = event.target;
        setValue(value);
        onChange(value);
    };

    return (
        <div className={cns(cn.root, className)}>
            {label && <Label htmlFor={name} required={required}>{label}</Label>}

            <select
                ref={ref}
                id={name}
                name={name}
                className={cns(cn.input, { [cn.placeholder]: value === "" })}
                onChange={changeHandler}
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
};
