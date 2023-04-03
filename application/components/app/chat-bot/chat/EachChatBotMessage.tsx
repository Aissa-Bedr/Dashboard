import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { EachChatBotMessageProps } from "../types/main";
import SecondaryLogo from "../../main/SecondaryLogo";
import { BsRobot } from "react-icons/bs";

const EachChatBotMessage: FC<EachChatBotMessageProps> = ({ id, content, isBotMessage }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex className="gap-4" direction="col">
            <Flex className="gap-2" direction="row" items="center">
                {isBotMessage ? (
                    <BsRobot className="text-black dark:text-white" size="2rem" />
                ) : (
                    <img className="w-10 h-10 rounded-full" src={`/${state.appearance.logo.src}`} alt="logo" />
                )}

                <SecondaryLogo text={isBotMessage ? "Bot" : "You"} />
            </Flex>

            <Flex direction="row" items="center" justify="between">
                <p className="font-medium text-center lg:text-left">{content}</p>
            </Flex>
        </Flex>
    );
};

export default EachChatBotMessage;
