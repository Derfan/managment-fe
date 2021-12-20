import { FunctionComponent } from "react";

import cn from "./Separator.module.css";

export const Separator:FunctionComponent = ({ children }) => {
    return (
        <div className={cn.root}>
            {children ? <span className={cn.text}>{children}</span> : null}
        </div>
    );
}
