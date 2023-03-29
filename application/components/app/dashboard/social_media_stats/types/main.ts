export interface ThemeTypes {
    blue: string;
    red: string;
}

export interface SocailMediaStatsInfoItemProps {
    id?: number;
    icon: React.ReactNode;
    content: string;
    href: string;
    buttonContent: string;
    backgroundColor: string;
    backgroundTheme: keyof ThemeTypes;
    colorTheme: keyof ThemeTypes;
}
