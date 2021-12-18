import { Form, Input, Button } from '../../../components';

export function SignInForm() {
    const onSubmit = (formData) => console.log('formData', formData);

    return (
        <Form onSubmit={onSubmit}>
            <Input 
                name="email"
                type="email"
                label="Email"
                placeholder="example@email.com"
                required
            />

            <Input 
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                required
            />

            <Button type="submit">Submit</Button>
        </Form>
    )
}
