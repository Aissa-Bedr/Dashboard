import { TOGGLE_IS_LIKED_MESSAGE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLikedMessageAction(friendId: string, messageId: string): AppStateAction {
    return { type: TOGGLE_IS_LIKED_MESSAGE, payload: { friends: { id: friendId }, messages: { id: messageId } } };
}

export default toggleIsLikedMessageAction;
