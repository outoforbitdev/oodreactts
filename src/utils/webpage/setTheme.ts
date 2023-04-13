import setBodyClass from "./setBodyClass";

export enum Themes {
    Light,
    Dark,
}

export function setTheme(theme: Themes): void {
    document.documentElement.setAttribute("data-theme", themeToClass(theme));
}

function themeToClass(theme: Themes): string {
    switch (theme) {
        case Themes.Light:
            return "OODCoreStyleThemeLight";
        case Themes.Dark:
            return "OODCoreStyleThemeDark";
        default:
            return "OODCoreStyleThemeLight";
    }
}
