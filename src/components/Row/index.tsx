import { FunctionComponent } from 'react';
import cns from 'classnames';

import * as cn from './Row.module.css';

type Props = {
    gap?: number
    className?: string
};

export const Row:FunctionComponent<Props> = ({ gap, className, children }) => {
    return <div style={{ gap: `${gap}px` }} className={cns(cn.root, className)}>{children}</div>
};

Row.defaultProps = {
    gap: 15,
};
