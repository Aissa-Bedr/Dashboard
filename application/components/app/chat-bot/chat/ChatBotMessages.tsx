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
import clearChatBotAction from "@/redux/actions/main_actions/clearChatBotAction";
import classNames from "classnames";
import Details from "@/components/build/Details";
import { botMessage } from "./script";
import Move from "@/components/build/Move";
import { useRouter } from "next/router";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const ChatBotMessages = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();
    const router = useRouter();

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

        botMessage(content, { state, dispatch, router });

        setContent("");
    }

    function clearChatBot(): void | false {
        dispatch(clearChatBotAction());
        toast.success("Chat cleared successfully !");
    }

    return (
        <>
            <BoxContainer className="col-span-3">
                <Flex className="gap-4" direction="col">
                    <form onSubmit={addMessage}>
                        <Flex className="w-full gap-2" direction={chatBotMessagesInfo.length >= 1 ? "col" : "row"}>
                            <Input
                                type="text"
                                placeholder="Write a message"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                            {chatBotMessagesInfo.length >= 1 ? (
                                <Flex direction="row" items="center" justify="between">
                                    {chatBotMessagesInfo.length >= 1 && (
                                        <button
                                            className={classNames(
                                                "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                                                { "rounded-md": state.switchBooleans.uiControl.isRounded }
                                            )}
                                            onClick={clearChatBot}
                                            type="button"
                                        >
                                            Clear
                                        </button>
                                    )}

                                    <Button className="px-4">Send</Button>
                                </Flex>
                            ) : (
                                <Button className="px-4">Send</Button>
                            )}
                        </Flex>
                    </form>

                    <Details note="Examples">
                        <Flex className="gap-2 px-4 py-2" direction="col">
                            <Flex className="gap-2" direction="col">
                                <p className="text-sm __secondary_logo">
                                    Questions: to describe an question we use: "qs:" keyWord and the question name
                                    "what's your name ?"
                                </p>
                                <p className="text-sm __secondary_logo">Example: qs: what's your name ?</p>
                                <Move href="/chat-bot/questions" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    Questions
                                </Move>
                            </Flex>

                            <Flex className="gap-2" direction="col">
                                <p className="text-sm __secondary_logo">
                                    Actions: to describe an action we use: "do:" keyWord and the action name "change the
                                    theme"
                                </p>
                                <p className="text-sm __secondary_logo">Example: do: Change the theme</p>
                                <Move href="/chat-bot/actions" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    Actions
                                </Move>
                            </Flex>

                            <Flex className="gap-2" direction="col">
                                <p className="text-sm __secondary_logo">
                                    SayHello: to describe an sayHello we use: "sh:" keyWord and the action name "hi"
                                </p>
                                <p className="text-sm __secondary_logo">Example: sh: hi</p>
                                <Move href="/chat-bot/sayhello" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    SayHello
                                </Move>
                            </Flex>
                        </Flex>
                    </Details>
                </Flex>
            </BoxContainer>

            {chatBotMessagesInfo.length >= 1 ? (
                <BoxContainer className="col-span-3">
                    <Flex className="w-full gap-2" direction="col">
                        {chatBotMessagesInfo}
                    </Flex>
                </BoxContainer>
            ) : (
                <BoxContainer className="col-span-3 text-sm font-semibold uppercase">
                    No messages to show !
                </BoxContainer>
            )}
        </>
    );
};

export default ChatBotMessages;
