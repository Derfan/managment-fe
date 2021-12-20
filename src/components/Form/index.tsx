import { FunctionComponent } from "react";

type PropsType = {
    onSubmit: () => void,
};

export const Form:FunctionComponent<PropsType> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
}
