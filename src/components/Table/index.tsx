import { Children, cloneElement } from "react";

import * as cn from "./Table.module.css";

type Props = {
    source: [{ [key:string]: string|number|boolean }]
    loading: boolean
};

const Table = ({ source, loading, children }:Props) => {
    return (
        <table>
            <thead>
                <tr>
                    {Children.map(children, child => {
                        return <th>{child.props.title}</th>
                    })}
                </tr>
            </thead>

            <tbody>
                {source?.map(item => (
                    <tr>
                        {Children.map(children, child => cloneElement(child, { data: item }))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Column = ({ data, children }) => {
    return (
        <td>{children(data)}</td>
    )
};

Table.Column = Column;

export { Table, Column };
