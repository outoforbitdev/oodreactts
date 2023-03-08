import setBodyClass from "./setBodyClass";

enum Themes {
    Light,
    Dark,
}

export default function setTheme(theme: Themes): void {
    setBodyClass(themeToClass(theme));
}

function themeToClass(theme: Themes): string {
    switch(theme) {
        case Themes.Light:
            return "OODCoreStyleThemeLight";
        case Themes.Dark:
            return "OODCoreStyleThemeDark";
        default:
            return "OODCoreStyleThemeLight";
    }
}