import { TOGGLE_IS_LIKED_FRIEND } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLikedFriendAction(id: string): AppStateAction {
    return { type: TOGGLE_IS_LIKED_FRIEND, payload: { friends: { id } } };
}

export default toggleIsLikedFriendAction;
