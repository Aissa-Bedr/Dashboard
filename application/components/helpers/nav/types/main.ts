import { LinkProps } from "./app";

export interface LinkElementProps {
    id?: number;
    link: LinkProps;
    href: LinkProps;
    icon: React.ReactNode;
    content: string;
}
