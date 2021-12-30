import { memo, useContext } from "react";

import { Title } from "../../components";
import { Layout, ThemeSwitcher } from "../../modules";
import * as cn from "./Settings.module.css";

export const SettingsRoute = memo(() => {
    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Settings</Title>

            <ThemeSwitcher />
        </Layout>
    );
});

export default SettingsRoute;
