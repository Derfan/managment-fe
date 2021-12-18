import { FunctionComponent } from "react";

import cn from './Button.module.css';

type PropsType = {
    type: "button"|"submit"|"reset"
    onClick?: () => void
};

export const Button:FunctionComponent<PropsType> = ({ type, children, onClick }) => {
    return <button type={type} className={cn.button} onClick={onClick}>{children}</button>
}

Button.defaultProps = {
    type: "button",
};
