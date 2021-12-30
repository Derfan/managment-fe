import { memo } from "react";

import { Title } from "../../components";

import * as cn from "./NotFoundRoute.module.css";

export const NotFoundRoute = memo(() => {
    return (
        <div className={cn.root}>
            <Title tag="h3">Ops! 404 error</Title>

            <p className={cn.description}>Route was not found</p>
        </div>
    )
});

export default NotFoundRoute;
