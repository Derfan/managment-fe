import { FunctionComponent } from "react";

import cn from "./Separator.module.css";

export const Separator:FunctionComponent = ({ children }) => {
    return (
        <div className={cn.line}>{children}</div>
    );
}
