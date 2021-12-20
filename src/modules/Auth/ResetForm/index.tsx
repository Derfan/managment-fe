import { useForm } from 'react-hook-form';

import { Form, Input, Button } from '../../../components';

export function ResetForm({ setSubmitted }) {
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (formData:{ [key:string]: string }) => {
        console.log('formData', formData);
        setSubmitted();
    }

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

            <Button type="submit">Submit</Button>
        </Form>
    )
}
