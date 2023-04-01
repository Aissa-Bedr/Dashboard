import { TOGGLE_IS_FRIEND_MESSAGE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsFriendMessageAction(friendId: string, messageId: string): AppStateAction {
    return { type: TOGGLE_IS_FRIEND_MESSAGE, payload: { friends: { id: friendId }, messages: { id: messageId } } };
}

export default toggleIsFriendMessageAction;
