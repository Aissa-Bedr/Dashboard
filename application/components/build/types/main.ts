import { AppStateActionType } from "@/redux/types/app";

export default interface ComponentProps {
    id?: string;
    className?: string;
    children?: React.ReactNode;
}

export interface ContainerProps extends ComponentProps {}

export interface FlexProps extends ComponentProps {
    direction: keyof FlexDirections;
    items?: keyof FlexItems;
    justify?: keyof FlexJustify;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface FlexDirections {
    row: string;
    "row-reverse": string;
    col: string;
    "col-reverse": string;
}

export interface FlexItems {
    start: string;
    center: string;
    end: string;
}

export interface FlexJustify extends FlexItems {
    between: string;
    around: string;
    evenly: string;
}

export interface GridProps extends ComponentProps {
    cols: keyof GridColumns;
}

export interface GridColumns {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
}

export interface HeaderProps {
    title: string;
}

export interface BaseProps extends ComponentProps {}

export interface LogoProps {
    content: string;
}

export interface LogoContainerProps extends ComponentProps {}

export interface ContentWrapperProps extends ComponentProps {}

export interface BaseWrapperProps extends ComponentProps {}

export interface SwitchButtonProps {
    isChecked: boolean;
    dispatchType: AppStateActionType;
}

export interface SettingsInfoProps {
    label: string;
    labelHTMLFor: string;
    type: string;
    stateValue: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface ControlsItemContainerProps extends ComponentProps {
    dontIncludePadTop?: true;
    dontIncludeBorBottom?: true;
}

export interface ControlsCSItemProps extends ControlsItemContainerProps, HeaderProps {}

export interface ButtonProps extends ComponentProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface InputProps
    extends Omit<ComponentProps, "children">,
        Omit<SettingsInfoProps, "stateValue" | "label" | "labelHTMLFor"> {
    placeholder?: string;
    value?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

export interface SelectProps extends ComponentProps {
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    value?: string;
}

export interface MoveProps extends ComponentProps {
    href: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
