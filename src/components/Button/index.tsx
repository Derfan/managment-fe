import { FunctionComponent } from "react";
import cns from "classnames";

import * as cn from './Button.module.css';

type PropsType = {
    type: "button"|"submit"|"reset"
    className?: string
    onClick?: () => void
};

export const Button:FunctionComponent<PropsType> = ({ type, className, children, onClick }) => {
    return <button type={type} className={cns(cn.button, className)} onClick={onClick}>{children}</button>
}

Button.defaultProps = {
    type: "button",
    className: "",
};
