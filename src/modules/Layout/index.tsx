import { FunctionComponent } from "react";

import { NavigationBar } from "./NavigationBar";

import * as cn from "./Layout.module.css";

type Props = {};

export const Layout:FunctionComponent<Props> = ({ children }) => {
    return (
        <div className={cn.root}>
            <NavigationBar />

            <div className={cn.content}>
                {children}
            </div>
        </div>
    )
}
