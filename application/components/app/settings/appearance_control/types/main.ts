import { BackgroundColorTheme, SrcType } from "./app";

export interface BackgroundThemes {
    default: string;
    default2: string;
    red: string;
    green: string;
    orange: string;
    purple: string;
    pink: string;
}

export interface AppearanceInfoItemProps {
    backgroundColor: BackgroundColorTheme;
}

export interface LogoTypes {
    default: string;
    person1: string;
    person2: string;
    person3: string;
    person4: string;
}

export interface AppearanceLogoItemProps {
    type: SrcType;
    children: React.ReactNode;
}
