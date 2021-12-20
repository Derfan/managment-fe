import { FunctionComponent } from "react";
import cns from "classnames";

import * as cn from "./Form.module.css";

type PropsType = {
    className?: string
    onSubmit: () => void
};

export const Form:FunctionComponent<PropsType> = ({ className, children, onSubmit }) => {
    return (
        <form className={cns(cn.form, className)} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

Form.defaultProps = {
    className: "",
};
