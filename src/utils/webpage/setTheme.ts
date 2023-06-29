import setBodyClass from "./setBodyClass";

export type Theme = "light" | "dark"

export const  setTheme = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", themeToClass(theme));
}

function themeToClass(theme: Theme): string {
    switch (theme) {
        case "light":
            return "OODCoreStyleThemeLight";
        case "dark":
            return "OODCoreStyleThemeDark";
        default:
            return "OODCoreStyleThemeLight";
    }
}
