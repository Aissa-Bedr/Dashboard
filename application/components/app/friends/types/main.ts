import { AppState, AppStateAction } from "@/redux/types/main";
import { Dispatch } from "redux";

export type MessageType = "sayHello" | "interrogativeQuestion" | "rightOrWrong";

export interface Message {
    id?: number;
    messageDescription: string;
    isLiked: boolean;
    isFriendMessage: boolean;
}

export interface FriendProps {
    id?: number;
    pictureSrc: string;
    name: string;
    job: string;
    isLiked?: boolean;
    messages?: Message[];
}

export interface FriendMessage {
    state: AppState;
    dispatch: Dispatch<AppStateAction>;
}
