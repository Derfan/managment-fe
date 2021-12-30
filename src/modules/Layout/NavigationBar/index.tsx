import { NavLink } from "react-router-dom";
import cns from "classnames";

import { SettingsIcon, DashboardIcon, CustomersIcon } from "./icons";

import * as cn from "./NavigationBar.module.css";

export const NavigationBar = () => {
    const handleClassNames = ({ isActive }) => cns(cn.link, { [cn.active]: isActive });

    return (
        <nav className={cn.navigation}>
            <NavLink to="/dashboard" className={handleClassNames}>
                <DashboardIcon />
                <span>Dashboard</span>
            </NavLink>

            <NavLink to="/customers" className={handleClassNames}>
                <CustomersIcon />
                <span>Customers</span>
            </NavLink>

            <NavLink to="/settings" className={handleClassNames}>
                <SettingsIcon />
                <span>Settings</span>
            </NavLink>
        </nav>
    );
};
