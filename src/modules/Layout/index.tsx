import { FunctionComponent } from "react";
import cns from "classnames";

import { NavigationBar } from "./NavigationBar";

import * as cn from "./Layout.module.css";

type Props = {
    className?: string
    contentClassName?: string
};

export const Layout:FunctionComponent<Props> = ({ className, contentClassName, children }) => {
    return (
        <div className={cns(cn.root, className)}>
            <NavigationBar />

            <div className={cns(cn.content, contentClassName)}>
                {children}
            </div>
        </div>
    )
}
