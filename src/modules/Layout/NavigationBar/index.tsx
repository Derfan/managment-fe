import { NavLink } from "react-router-dom";
import cns from "classnames";

import { SettingsIcon, DashboardIcon } from "./icons";

import * as cn from "./NavigationBar.module.css";

export const NavigationBar = () => {
    const handleClassNames = ({ isActive }) => cns(cn.link, { [cn.active]: isActive });

    return (
        <nav className={cn.navigation}>
            <NavLink to="/tasks" className={handleClassNames}>
                <DashboardIcon />
                <span>Tasks</span>
            </NavLink>

            <NavLink to="/dashboard" className={handleClassNames}>
                <DashboardIcon />
                <span>Dashboard</span>
            </NavLink>

            <NavLink to="/settings" className={handleClassNames}>
                <SettingsIcon />
                <span>Settings</span>
            </NavLink>
        </nav>
    );
};
