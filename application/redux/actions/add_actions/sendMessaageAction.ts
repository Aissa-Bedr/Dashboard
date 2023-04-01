import { Message } from "@/components/app/friends/types/main";
import { SEND_MESSAGE } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function sendMessageAction(friendId: string, messages: Omit<Message, "isLiked">): AppStateAction {
    return {
        type: SEND_MESSAGE,
        payload: { friends: { id: friendId }, messages },
    };
}

export default sendMessageAction;
