import { useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { Title, Button, ToggleSwitch } from "../../components";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { AuthContext } from "../Auth";
import { Navigation } from "./Navigation";
import { LOGOUT } from "../../api";
import * as cn from "./Header.module.css";

export const Header = () => {
    const { isAuth, logout } = useContext(AuthContext);
    const [logoutUser, { client }] = useMutation(LOGOUT);

    const clickHandler = async () => {
        await logoutUser();
        await client.resetStore();
        logout();
    };

    return (
        <header className={cn.header}>
            <Title tag="h1">
                MyApp
            </Title>

            <Navigation />

            <ToggleSwitch />

            <div>
                <ThemeSwitcher />

                {isAuth
                    ? (
                        <Button className={cn.btn} onClick={clickHandler}>Log Out</Button>
                    )
                    :(
                        <div>
                            <p><Link to="/sign-in">Sign In</Link></p>
                            <p><Link to="/sign-up">Sign Up</Link></p>
                        </div>
                    )}
            </div>
        </header>
    )
};
