import * as cn from './ToggleSwitch.module.css';

type Props = {
    value: any
    onChange: () => void
};

export const ToggleSwitch = ({ value, onChange }:Props) => {
    const changeHandler = e => {
        console.log('value', e.target.value);
    }

    return (
        <label className={cn.root}>
            <input type="checkbox" value={value} onChange={changeHandler} />
            <span className={cn.element}></span>
        </label>
    );
};
