import { FunctionComponent, useMemo, Children, cloneElement } from "react";
import cns from "classnames";

import * as cn from "./EditableLayout.module.css";

type Props = {
    template: string[]
    draggable?: boolean
    className?: string
};

export const EditableLayout:FunctionComponent<Props> = ({ className, draggable, template, children }) => {
    const gridTemplate = useMemo(
        () => template.reduce((acc, item) => `${acc} '${item}'`, ""),
        [],
    );

    return (
        <div className={cns(cn.root, className)} style={{ gridTemplate }}>
            {Children.map(children, child => cloneElement(child, { draggable }))}
        </div>
    );
};
