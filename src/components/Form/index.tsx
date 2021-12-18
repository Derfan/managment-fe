import { FunctionComponent, Children, cloneElement } from 'react';
import { useForm } from "react-hook-form";

type PropsType = {
    onSubmit: (formData:any) => void,
};

export const Form:FunctionComponent<PropsType> = ({ children, onSubmit }) => {
    const { handleSubmit, register } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Children.map(children, (child) =>
                child.props.name ? cloneElement(child, { register }) : child
            )}
        </form>
    );
}
