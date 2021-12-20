import { useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input, Button } from '../../../components';

const PASSWORD_VALIDATION = {
    required: true,
    minLength: {
        value: 8,
        message: 'Incorrect length min 8',
    },
    maxLength: {
        value: 16,
        message: 'Incorrect length max 16',
    },
};

export function SignUpForm() {
    const passwordRef = useRef(null);
    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    const onSubmit = (formData:{ [key:string]: string }) => console.log('formData', formData);

    passwordRef.current = watch('password');

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="firstName"
                label="First Name"
                placeholder="John"
                {...register('firstName', { required: true })}
                error={errors.firstName}
                required
            />
            <Input
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                {...register('lastName', { required: true })}
                error={errors.lastName}
                required
            />
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
                {...register('password', PASSWORD_VALIDATION)}
                error={errors.password}
                required
            />
            <Input
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                placeholder="********"
                {...register(
                    'repeatPassword',
                    {
                        ...PASSWORD_VALIDATION,
                        validate: value => value === passwordRef.current || 'Password should be the same',
                    },
                )}
                error={errors.repeatPassword}
                required
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}
