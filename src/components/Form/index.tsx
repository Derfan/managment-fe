import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

type PropsType = {
    onSubmit: (formData:any) => void,
};

export const Form:FunctionComponent<PropsType> = ({ children, onSubmit }) => {
    const { handleSubmit } = useForm();

    return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
}
