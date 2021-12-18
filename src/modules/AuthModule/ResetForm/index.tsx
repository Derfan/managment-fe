import { Form, Input, Button } from '../../../components';

export function ResetForm({ setSubmitted }) {
    const onSubmit = (formData) => {
        console.log('formData', formData);
        setSubmitted();
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="email" type="email" placeholder="Email" required />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
