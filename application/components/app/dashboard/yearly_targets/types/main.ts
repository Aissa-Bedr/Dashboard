import { BackgroundColor, Ratio } from "./app";

export interface BackgroundThemes {
    blue: string;
    orange: string;
    green: string;
}

export interface PrimaryBackgroundThemes extends BackgroundThemes {}

export interface SecondaryBackgroundThemes extends BackgroundThemes {}

export interface ItemRatioValues {
    25: string;
    50: string;
    75: string;
}

export interface YearlyInfoItemProps {
    id?: number;
    icon: React.ReactNode;
    firstSecContent: string;
    secondSecContent: string;
    primaryBackground: keyof BackgroundThemes;
    secondaryBackground: keyof BackgroundThemes;
    ratio: Ratio;
}
