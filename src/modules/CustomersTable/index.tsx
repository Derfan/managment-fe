import cns from "classnames";

import { Table, Card } from "../../components";

import * as cn from "./CustomersTable.module.css";

type Props = {
    source: { [key:string]: string|number }[]
    loading: boolean
    title?: string
    className?:string
    hovered?: boolean
    style?: object
    onClick?: () => void
};

export const CustomersTable = ({ source, loading, title, className, hovered, onClick, ...rest }:Props) => {
    return (
        <Card title={title} className={cns(cn.card, className)} onClick={onClick} {...rest}>
            <div className={cn.scroll}>
                <Table uniqField="email" source={source} loading={loading} hovered={hovered}>
                    <Table.Column title="Picture">{({ picture }) => <img src={picture.medium} className={cn.picture} />}</Table.Column>
                    <Table.Column title="Name">{({ name }) => `${name.title}. ${name.first} ${name.last}`}</Table.Column>
                    <Table.Column title="Age">{({ dob }) => dob.age}</Table.Column>
                    <Table.Column title="Email">{({ email }) => <a href={`mailto:${email}`}>{email}</a>}</Table.Column>
                    <Table.Column title="Nationality">{({ nat }) => nat}</Table.Column>
                </Table>
            </div>
        </Card>
    );
};
