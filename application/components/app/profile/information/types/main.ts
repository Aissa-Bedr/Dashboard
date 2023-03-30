import { AppStateActionType } from "@/redux/types/app";

export interface InfoBoxProps {
    title: string;
    isChecked: boolean;
    dispatchType: AppStateActionType;
    children?: React.ReactNode;
}

export interface InfoBoxItemProps {
    prop: string;
    value: string | number;
}
