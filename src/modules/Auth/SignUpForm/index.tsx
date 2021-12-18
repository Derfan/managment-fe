import { Form, Input, Button } from '../../../components';

export function SignUpForm() {
    const onSubmit = (formData) => console.log('formData', formData);

    return (
        <Form onSubmit={onSubmit}>
            <Input
                name="firstName"
                label="First Name"
                placeholder="John"
                required
            />
            <Input
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                required
            />
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
            <Input
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
                required
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
