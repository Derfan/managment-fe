import { FunctionComponent, Children, cloneElement } from 'react';
import { useForm } from "react-hook-form";

type PropsType = {
    onSubmit: (formData:any) => void,
};

export const Form:FunctionComponent<PropsType> = ({ children, onSubmit }) => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Children.map(children, (child) => {
                const { name } = child.props;

                return name ? cloneElement(child, { register, error: errors[name] }) : child
            })}
        </form>
    );
}
