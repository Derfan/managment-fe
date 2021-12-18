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
                validation={{
                    required: true
                }}
            />

            <Input 
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                validation={{
                    required: true,
                    minLength: {
                        value: 8,
                        message: 'Incorrect length min 8',
                    },
                    maxLength: {
                        value: 16,
                        message: 'Incorrect length max 16',
                    }
                }}
            />

            <Button type="submit">Submit</Button>
        </Form>
    )
}
