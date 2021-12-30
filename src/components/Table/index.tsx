import { Children, cloneElement } from "react";
import cns from "classnames";

import * as cn from "./Table.module.css";

type Props = {
    source: { [key:string]: string|number }[]
    loading: boolean
    className?: string
    uniqField?: string
    hovered?: boolean
};

const Table = ({ source, loading, uniqField, hovered, className, children }:Props) => {    
    const numberOfColumns = Children.count(children);
    
    return (
        <table className={cns(cn.table, className)}>
            <thead>
                <tr className={cn.row}>
                    {Children.map(children, child => {
                        return <th className={cns(cn.cell, cn.headCell)}>{child.props.title}</th>
                    })}
                </tr>
            </thead>

            <tbody className={cns(cn.body, { [cn.hovered]: hovered })}>
                {source?.map(item => (
                    <tr key={item[uniqField]} className={cn.row}>
                        {Children.map(children, child => cloneElement(child, { data: item }))}
                    </tr>
                ))}

                {!loading && !source?.length && (
                    <tr>
                        <td className={cn.emptyCell} colSpan={numberOfColumns}>No Data</td>
                    </tr>
                )}

                {loading && (
                    <tr>
                        <td className={cn.emptyCell} colSpan={numberOfColumns}>Loading...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    uniqField: 'id',
    hovered: false,
};

const Column = ({ data, children, ...rest }) => {
    return (
        <td className={cn.cell} {...rest}>{children(data)}</td>
    )
};

Table.Column = Column;

export { Table, Column };
