import { Theme } from "@/redux/types/app";

export const randomId = (char?: number): number => Math.floor(Math.random() * (char ? char : 9876543210));

export function themeSwitcher(theme: Theme): Theme {
    switch (theme) {
        case "light":
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            break;

        case "dark":
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            break;

        default:
            document.body.classList.remove("dark");
            document.body.classList.add("light");
    }

    return theme;
}
