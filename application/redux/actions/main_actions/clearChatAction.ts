import { CLEAR_CHAT } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function clearChatAction(id: string): AppStateAction {
    return {
        type: CLEAR_CHAT,
        payload: { friends: { id } },
    };
}

export default clearChatAction;
