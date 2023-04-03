import { CLEAR_CHAT_BOT } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function clearChatBotAction(): AppStateAction {
    return { type: CLEAR_CHAT_BOT };
}

export default clearChatBotAction;
