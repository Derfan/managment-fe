import { Table, Card } from "../../../components";

export const CustomersTable = ({ source, loading }) => {
    return (
        <Card>
            <Table source={source} loading={loading}>
                <Table.Column title="Picture">{({ picture }) => <img src={picture.medium} />}</Table.Column>
                <Table.Column title="Name">{({ name }) => `${name.title} ${name.first} ${name.last}`}</Table.Column>
                <Table.Column title="Age">{({ dob }) => dob.age}</Table.Column>
                <Table.Column title="Email">{({ email }) => email}</Table.Column>
                <Table.Column title="Nationality">{({ nat }) => nat}</Table.Column>
            </Table>
        </Card>
    );
};
