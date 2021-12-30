import { Link } from "react-router-dom";

import * as cn from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <div className={cn.root}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/how-it-works">How it works</Link>
        </div>
    );
};
