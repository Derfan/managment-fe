import { FunctionComponent } from "react";
import cns from "classnames";

import * as cn from "./Form.module.css";

type PropsType = {
    className?: string
    direction?: "column"|"row"
    onSubmit: () => void
};

export const Form:FunctionComponent<PropsType> = ({ className, children, direction, onSubmit }) => {
    return (
        <form className={cns(cn.form, className)} style={{ flexDirection: direction }} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

Form.defaultProps = {
    className: "",
    direction: "column",
};
