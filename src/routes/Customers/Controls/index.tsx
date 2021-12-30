
import { Input, Form, Card, Select } from "../../../components";
import * as cn from "./Controls.module.css";

export const Controls = () => {
    return (
        <Card className={cn.root}>
            <Form className={cn.form} direction="row">
                <Input name="name" placeholder="John Doe" label="Name" />
                <Input name="email" placeholder="example@email.com" label="Email" />
                <Select placeholder="Select Nationality" options={['DE', 'IT', 'ES']} label="Nationality" />
                <Select placeholder="Select Gender" options={['Male', 'Female']} label="Gender" />
            </Form>
        </Card>
    );
};
