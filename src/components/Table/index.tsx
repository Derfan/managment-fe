import { Children, cloneElement } from "react";
import cns from "classnames";

import * as cn from "./Table.module.css";

type Props = {
    source: [{ [key:string]: string|number }]
    loading: boolean
    uniqField?: string
};

const Table = ({ source, loading, uniqField, children }:Props) => {    
    return (
        <table className={cn.table}>
            <thead>
                <tr className={cn.row}>
                    {Children.map(children, child => {
                        return <th className={cns(cn.cell, cn.head)}>{child.props.title}</th>
                    })}
                </tr>
            </thead>

            <tbody>
                {source?.map(item => (
                    <tr key={item[uniqField]} className={cn.row}>
                        {Children.map(children, child => cloneElement(child, { data: item }))}
                    </tr>
                ))}

                {loading && (
                    <tr>
                        <td className={cn.loadingCell} colSpan={Children.count(children)}>Loading...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    uniqField: 'id',
};

const Column = ({ data, children, ...rest }) => {
    return (
        <td className={cn.cell} {...rest}>{children(data)}</td>
    )
};

Table.Column = Column;

export { Table, Column };
