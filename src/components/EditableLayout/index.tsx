import { FunctionComponent, useMemo } from "react";
import cns from "classnames";

import * as cn from "./EditableLayout.module.css";

type Props = {
    className?: string
    template: string[]
};

export const EditableLayout:FunctionComponent<Props> = ({ className, template, children }) => {
    const gridTemplate = useMemo(
        () => template.reduce((acc, item) => `${acc} '${item}'`, ""),
        [],
    );

    return (
        <div className={cns(cn.root, className)} style={{ gridTemplate }}>
            {children}
        </div>
    );
};
