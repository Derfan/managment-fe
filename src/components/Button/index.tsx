import { forwardRef, FunctionComponent } from "react";
import cns from "classnames";

import * as cn from './Button.module.css';

type PropsType = {
    type?: "button"|"submit"|"reset"
    className?: string
    disabled?: boolean
    onClick?: () => void
};

export const Button:FunctionComponent<PropsType> = forwardRef(({ type, className, children, disabled, onClick }, ref:any) => {
    return (
        <button
            ref={ref}
            type={type} 
            className={cns(cn.button, className, { [cn.disabled]: disabled })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
})

Button.defaultProps = {
    type: "button",
    className: "",
    disabled: false,
};
