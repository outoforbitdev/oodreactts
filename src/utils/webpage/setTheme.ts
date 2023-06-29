import setBodyClass from "./setBodyClass";

export type Theme = "light" | "dark"

export function setTheme(theme: Theme): void {
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
