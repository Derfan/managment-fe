
import { Input, Form, Card } from "../../../components";
import * as cn from "./Controls.module.css";

export const Controls = () => {
    return (
        <Card>
            <Form className={cn.root} direction="row">
                <Input name="name" placeholder="John Doe" />
                <Input name="email" placeholder="example@email.com" />
            </Form>
        </Card>
    );
};
