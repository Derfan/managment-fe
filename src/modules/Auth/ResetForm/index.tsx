import { useForm } from 'react-hook-form';

import { Form, Input, Button } from '../../../components';
import * as cn from './ResetForm.module.css';

export function ResetForm({ setSubmitted }) {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = ({ email }:{ email: string }) => {
        console.log('formData', email);
        setSubmitted();
    }

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

            <Button type="submit">Submit</Button>
        </Form>
    )
}
