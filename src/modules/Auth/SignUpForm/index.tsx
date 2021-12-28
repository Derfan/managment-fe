import { useCallback, useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Form, Input, Button, Row } from '../../../components';
import { CREATE_USER, LOGIN } from '../../../api';
import { AuthContext } from '../AuthProvider';
import * as cn from './SignUpForm.module.css';

type FormData = {
    email:string
    password:string
    firstName:string
    lastName:string
};

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

const useSignUpUser = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [createUser] = useMutation(CREATE_USER);
    const [loginUser] = useMutation(LOGIN);

    return useCallback(async (userData:FormData) => {
        await createUser({ variables: userData });

        const { data } = await loginUser({ variables: { email: userData.email, password: userData.password } });

        login(data.login.token);
        navigate('/');
    }, []);
};

export function SignUpForm() {
    const signUpUser = useSignUpUser();
    
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const passwordRef = useRef(null);

    const onSubmit = async (formData:FormData) => {
        await signUpUser(formData);
    };

    passwordRef.current = watch('password');

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={cn.root}>
            <Row>
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
            </Row>
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
