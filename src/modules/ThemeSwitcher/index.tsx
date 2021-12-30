import { RadioGroup } from "../../components";
import { Themes } from "../../constants";
import { useTheme } from "../../hooks";

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
