import { REMOVE_FRIEND } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeFriendAction(id: string): AppStateAction {
    return {
        type: REMOVE_FRIEND,
        payload: { friends: { id } },
    };
}

export default removeFriendAction;
