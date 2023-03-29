import { ButtonComponentSwitchType, SwitchType } from "./app";

export interface SwitchButtonControlInfoProps {
    type: SwitchType;
}

export interface InputFieldControlInfoProps extends SwitchButtonControlInfoProps {}

export interface ButtonControlInfoProps {
    type: ButtonComponentSwitchType;
}
