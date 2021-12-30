import { Input, Form, Card, Select } from "../../../components";
import * as cn from "./Controls.module.css";

export const Controls = () => {    
    return (
        <Card className={cn.root}>
            <Form className={cn.form} direction="row">
                <Input
                    name="name"
                    placeholder="John Doe"
                    label="Name"
                />

                <Input
                    name="email"
                    placeholder="example@email.com"
                    label="Email"
                />

                <Select
                    label="Nationality"
                    placeholder="Select Nationality"
                    options={['DE', 'IT', 'ES']}
                />

                <Select
                    label="Gender"
                    placeholder="Select Gender"
                    options={['male', 'female']}
                />
            </Form>
        </Card>
    );
};
