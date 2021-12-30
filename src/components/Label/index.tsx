import cns from "classnames";
import { FunctionComponent } from "react";

import * as cn from "./Label.module.css";

type Props = {
    htmlFor: string
    required?: boolean
    isError?: boolean
};

export const Label:FunctionComponent<Props> = ({ htmlFor, required, isError, children }) => {
    return (
        <label className={cns(cn.label, { [cn.error]: isError })} htmlFor={htmlFor}>
            {children} {required && '*'}
        </label>
    );
};

Label.defaultProps = {
    required: false,
    isError: false,
};
