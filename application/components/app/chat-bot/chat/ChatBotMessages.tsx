import React, { useState } from "react";
import BoxContainer from "../../main/BoxContainer";
import Flex from "@/components/build/Flex";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { toast } from "react-toastify";
import EachChatBotMessage from "./EachChatBotMessage";
import sendChatBotMessageAction from "@/redux/actions/add_actions/sendChatBotMessageAction";

const ChatBotMessages = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    const chatBotMessagesInfo = state.chatBotMessages.map((message) => (
        <EachChatBotMessage key={message.id} {...message} />
    ));

    function addMessage(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!content) {
            toast.error("Message can't be empty !");
            return false;
        }

        dispatch(sendChatBotMessageAction({ content, isBotMessage: false }));
        dispatch(sendChatBotMessageAction({ content: "Hello there", isBotMessage: true }));
        setContent("");
    }

    return (
        <BoxContainer>
            <Flex className="gap-4" direction="col">
                <form onSubmit={addMessage}>
                    <Flex className="w-full gap-2" direction="row">
                        <Input
                            type="text"
                            placeholder="Write a message"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Button className="px-4">Send</Button>
                    </Flex>
                </form>

                <Flex className="gap-2" direction="col">
                    {chatBotMessagesInfo}
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default ChatBotMessages;
