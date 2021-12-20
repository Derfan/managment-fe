import { useEffect, useRef } from "react";

import { RadioGroup } from "../../components";

enum Themes {
  Light,
  Dark
}

const getThemeClassName = (value:string) => `${value.toLowerCase()}-theme`;

const useTheme = () => {
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

    useEffect(() => {
        setTheme(theme);
    }, []);

    return {
        theme,
        setTheme,
    };
};

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <RadioGroup
            name="theme"
            options={[Themes[0], Themes[1]]}
            defaultValue={theme}
            onChange={setTheme}
            direction="row"
        />
    )
};
