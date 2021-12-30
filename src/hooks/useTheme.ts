import { useRef } from "react";

import { Themes } from "../constants";

const getThemeClassName = (value:string) => `${value.toLowerCase()}-theme`;

export const useTheme = () => {
    const theme = window.localStorage.getItem('theme') || Themes[0];
    const bodyTheme = useRef(getThemeClassName(theme));

    const setTheme = (value:string) => {
        const nextBodyTheme = getThemeClassName(value);

        if (document.body.classList.length === 0) {
            document.body.classList.add(nextBodyTheme);
        } else {
            document.body.classList.replace(bodyTheme.current, nextBodyTheme);
        }

        window.localStorage.setItem('theme', value);
        bodyTheme.current = nextBodyTheme;
    };

    return {
        theme,
        setTheme,
    };
};
