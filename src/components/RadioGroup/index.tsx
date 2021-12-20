import { Fragment } from "react";

type PropsType = {
    name: string
    options: string[]
    defaultValue?: string
    direction?: 'row'|'column'
    required?: boolean
    onChange: (newValue:string) => void
}

export const RadioGroup = ({ name, options, defaultValue, direction, onChange }:PropsType) => {
    const changeHandler = event => onChange(event.target.value);

    return (
        <div style={{ display: 'flex', flexDirection: direction }}>
            {options.map(option => (
                <Fragment key={option}>
                    <input
                        type="radio"
                        id={option}
                        name={name}
                        value={option}
                        defaultChecked={option === defaultValue}
                        onChange={changeHandler}
                    />
                    <label htmlFor={option}>{option}</label>
                </Fragment>
            ))}
        </div>
    )
};

RadioGroup.defaultProps = {
    defaultValue: '',
    direction: 'column',
    required: false,
};
