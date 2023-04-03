import { NextRouter } from "next/router";
import { ChatBotMessage, FriendMessage } from "../../friends/types/main";

export interface EachChatBotMessageProps extends ChatBotMessage {}

export interface BotMessage extends FriendMessage {
    router: NextRouter;
}

export type BotMessageType = "unknown" | "question" | "actions" | "sayHello";
