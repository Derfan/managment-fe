import { useForm } from 'react-hook-form';

import { Form, Input, Button } from '../../../components';

export function SignInForm() {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (formData: { [key: string]: string }) => console.log('formData', formData);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="email"
                type="email"
                label="Email"
                placeholder="example@email.com"
                {...register('email', { required: true })}
                error={errors.email}
                required
            />

            <Input 
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                {...register(
                    'password',
                    {
                        required: true,
                        minLength: {
                            value: 8,
                            message: 'Incorrect length min 8',
                        },
                        maxLength: {
                            value: 16,
                            message: 'Incorrect length max 16',
                        },
                    }
                )}
                error={errors.password}
                required
            />

            <Button type="submit">Submit</Button>
        </Form>
    )
}
