export type SubscribeType = "free" | "silver" | "gold" | "platinum" | "super" | "max";
export type SubscribeTheme = keyof LogoBackgroundColors;

export interface PlanLogoProps {
    subscribeType: SubscribeType;
    price: number;
    logoBackgroundColor: SubscribeTheme;
}

export interface LogoBackgroundColors {
    green: string;
    silver: string;
    gold: string;
    platinum: string;
    super: string;
    max: string;
}

export interface FeatureProps {
    id?: number;
    content: string;
    completeContent: string;
    isChecked: boolean;
}

export interface PlansInfoItemProps extends PlanLogoProps {
    features: FeatureProps[];
}

export interface SubscribeButtonProps {
    backgroundColor: SubscribeTheme;
}
