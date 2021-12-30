
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { LOGIN } from '../../../api';
import { Form, Input, Button } from '../../../components';
import { AuthContext } from '../AuthProvider';
import * as cn from './SignInForm.module.css';

export function SignInForm() {
    const [loginUser, { loading }] = useMutation(LOGIN);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = async ({ email, password }:{ email: string, password: string }) => {
        const { data } = await loginUser({ variables: { email, password } });
        
        login(data.login.token);
        navigate('/dashboard');
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className={cn.root}>
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
                            value: 32,
                            message: 'Incorrect length max 32',
                        },
                    }
                )}
                error={errors.password}
                required
            />

            <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </Button>
        </Form>
    )
}
