import { Form, Input, Button } from '../../../components';

export function ResetForm({ setSubmitted }) {
    const onSubmit = (formData) => {
        console.log('formData', formData);
        setSubmitted();
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input
                name="email"
                type="email"
                label="Email"
                placeholder="example@email.com"
            />

            <Button type="submit">Submit</Button>
        </Form>
    )
}
