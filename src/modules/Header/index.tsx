import { Link } from "react-router-dom";

import { Title } from "../../components";
import cn from "./Header.module.css";

export const Header = () => {
    return (
        <header className={cn.header}>
            <Title tag="h1">
                <Link to="/">My App</Link>
            </Title>
        </header>
    )
};