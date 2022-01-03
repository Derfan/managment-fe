import { FunctionComponent, useMemo, Children, cloneElement } from "react";
import cns from "classnames";

import * as cn from "./EditableLayout.module.css";

type Props = {
    template: string[][]
    draggable?: boolean
    className?: string
};

const getAreas = (template:string[][]) => template.reduce((acc, line) => `${acc} '${line.join(" ")}'`, "");

export const EditableLayout:FunctionComponent<Props> = ({ className, draggable, template, children }) => {
    const gridTemplateAreas = useMemo(
        () => getAreas(template),
        [],
    );

    return (
        <div className={cns(cn.root, className)} style={{ gridTemplateAreas, gridTemplateRows: 'rows', gridTemplateColumns: `repeat(3, 1fr)` }}>
            {Children.map(children, child => cloneElement(child, { draggable }))}
        </div>
    );
};
