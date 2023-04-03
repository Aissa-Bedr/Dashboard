import { ChatBotMessage } from "@/components/app/friends/types/main";
import { SEND_CHAT_BOT_MESSAGE } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function sendChatBotMessageAction(chatBotMessages: Partial<ChatBotMessage>): AppStateAction {
    return {
        type: SEND_CHAT_BOT_MESSAGE,
        payload: { chatBotMessages },
    };
}

export default sendChatBotMessageAction;
