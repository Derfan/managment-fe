import * as cn from './ToggleSwitch.module.css';

export const ToggleSwitch = () => {
    return (
        <label className={cn.root}>
            <input type="checkbox" />
            <span className={cn.element}></span>
        </label>
    );
};
