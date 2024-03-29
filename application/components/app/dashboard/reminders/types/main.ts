import { Theme } from "./app";

export interface ThemeTypes {
    blue: string;
    green: string;
    orange: string;
    red: string;
}

export interface RemindersInfoItemProps {
    id?: string;
    title: string;
    time: string;
    theme: Theme;
}
