import { AppStateAction } from "../../types/main";
import { REMOVE_MESSAGE } from "@/redux/constants/removeTypes";

function removeMessageAction(friendId: string, messageId: string): AppStateAction {
    return {
        type: REMOVE_MESSAGE,
        payload: { friends: { id: friendId }, messages: { id: messageId } },
    };
}

export default removeMessageAction;
