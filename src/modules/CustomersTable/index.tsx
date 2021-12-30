import { Table } from "../../components";

import * as cn from "./CustomersTable.module.css";

type Props = {
    source: { [key:string]: string|number }[]
    loading: boolean
    hovered?: boolean
};

export const CustomersTable = ({ source, loading, hovered }:Props) => {
    return (
        <Table uniqField="email" source={source} loading={loading} hovered={hovered}>
            <Table.Column title="Picture">{({ picture }) => <img src={picture.medium} className={cn.picture} />}</Table.Column>
            <Table.Column title="Name">{({ name }) => `${name.title}. ${name.first} ${name.last}`}</Table.Column>
            <Table.Column title="Age">{({ dob }) => dob.age}</Table.Column>
            <Table.Column title="Email">{({ email }) => <a href={`mailto:${email}`}>{email}</a>}</Table.Column>
            <Table.Column title="Nationality">{({ nat }) => nat}</Table.Column>
        </Table>
    );
};
