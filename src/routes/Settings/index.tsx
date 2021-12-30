import { memo } from "react";
import { Layout, ThemeSwitcher } from "../../modules";

export const SettingsRoute = memo(() => {
    return (
        <Layout>
            Settings Route

            <ThemeSwitcher />
        </Layout>
    );
});

export default SettingsRoute;
