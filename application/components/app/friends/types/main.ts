import { AppState, AppStateAction } from "@/redux/types/main";
import { Dispatch } from "redux";

export type MessageType = "sayHello" | "interrogativeQuestion" | "rightOrWrong";

export interface Message {
    id?: string;
    messageDescription: string;
    isLiked: boolean;
    isFriendMessage: boolean;
}

export interface FriendProps {
    id?: string;
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

export interface EachMessageProps extends Message {
    friendId: string;
    friendPictureSrc: string;
    friendName: string;
}
