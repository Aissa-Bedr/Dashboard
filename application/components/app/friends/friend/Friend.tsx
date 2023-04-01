import React, { FC, useRef, useState } from "react";
import BoxContainer from "../../main/BoxContainer";
import { FriendProps } from "../types/main";
import Flex from "@/components/build/Flex";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import { FiTrash2 } from "react-icons/fi";
import { Theme } from "@/redux/types/app";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import classNames from "classnames";
import { HiArrowSmLeft } from "react-icons/hi";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import EachFriend from "./EachFriend";
import { friendMessage } from "./script";

const Friend: FC<FriendProps> = ({ id, pictureSrc, name, job, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [messageDescription, setMessageDescription] = useState("");
    const [isChatActive, setIsChatActive] = useState(false);

    const messagesInfo = state.friends.map((friend) =>
        friend.messages?.map((message) =>
            friend.id === id ? (
                <EachFriend
                    key={message.id}
                    {...message}
                    friendId={id!}
                    friendPictureSrc={pictureSrc}
                    friendName={name}
                />
            ) : null
        )
    );

    function removeFriend(): void {
        dispatch({ type: "removeFriend", payload: { friends: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Friend removed successfully !`, { position: "top-center", theme });
    }

    function toggleFriendLike(): void {
        dispatch({ type: "toggleIsLikedFriend", payload: { friends: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(isLiked ? "Friend unliked successfully !" : "Friend liked successfully !", {
                position: "top-center",
                theme,
            });
    }

    const toggleChat = (): void => setIsChatActive((prevState) => !prevState);

    function addMessage(): void | false {
        if (!messageDescription) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Message can't be empty !`, {
                    position: "top-center",
                    theme,
                });
            return false;
        }

        dispatch({
            type: "addMessage",
            payload: { friends: { id }, messages: { isFriendMessage: false, messageDescription } },
        });

        friendMessage(messageDescription, 1500, name, id!, { state, dispatch });

        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Message sent successfully !`, {
                position: "top-center",
                theme,
            });
        setMessageDescription("");
    }

    function clearChat(): void {
        dispatch({ type: "clearChat", payload: { friends: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Chat cleared successfully !", {
                position: "top-center",
                theme,
            });
    }

    return (
        <Flex className="gap-4" direction="col">
            <BoxContainer className="relative">
                <Flex className="gap-4" direction="col">
                    <Flex direction="row" items="center" justify="between">
                        {isChatActive ? (
                            <HiArrowSmLeft
                                className="duration-300 cursor-pointer text-grey-color dark:text-grey-dark-color hover:text-blue-color dark:hover:text-blue-dark-color"
                                size="1.5rem"
                                onClick={toggleChat}
                            />
                        ) : (
                            <>
                                <IoChatbubblesOutline
                                    className="duration-300 cursor-pointer text-grey-color dark:text-grey-dark-color hover:text-blue-color dark:hover:text-blue-dark-color"
                                    size="1.3rem"
                                    onClick={toggleChat}
                                />

                                <Flex className="gap-2" direction="row" items="center">
                                    <AiOutlineHeart
                                        className={classNames("duration-300 cursor-pointer", {
                                            "text-pink-500": isLiked,
                                            "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                                        })}
                                        size="1.3rem"
                                        onClick={toggleFriendLike}
                                    />

                                    <FiTrash2
                                        className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                                        onClick={removeFriend}
                                    />
                                </Flex>
                            </>
                        )}
                    </Flex>

                    {isChatActive ? (
                        <Flex direction="row" items="center" justify="between">
                            <Flex className="gap-2" direction="row" items="center">
                                <img className="w-12 h-12 rounded-full" src={pictureSrc} alt={`${name}_picture`} />

                                <p className="text-lg font-medium">{name}</p>
                            </Flex>

                            <button
                                className={classNames(
                                    "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                                    { "rounded-md": switchBooleans.uiControl.isRounded }
                                )}
                                onClick={clearChat}
                            >
                                Clear
                            </button>
                        </Flex>
                    ) : (
                        <Flex
                            className="gap-4 lg:items-start lg:justify-start"
                            direction="col"
                            items="center"
                            justify="center"
                        >
                            <img className="w-24 h-24 rounded-full" src={pictureSrc} alt={`${name}_picture`} />

                            <p className="text-lg font-medium">{name}</p>

                            <p className="text-sm font-semibold text-grey-color dark:text-grey-dark-color">
                                {!job.startsWith("@") && "@"}
                                {job}
                            </p>
                        </Flex>
                    )}
                </Flex>
            </BoxContainer>

            {isChatActive && (
                <BoxContainer>
                    <Flex className="gap-4" direction="col">
                        <Flex className="w-full gap-2" direction="row">
                            <Input
                                type="text"
                                placeholder="Write a message"
                                value={messageDescription}
                                onChange={(e) => setMessageDescription(e.target.value)}
                            />
                            <Button className="px-4" onClick={addMessage}>
                                Send
                            </Button>
                        </Flex>

                        <Flex className="gap-2" direction="col">
                            {messagesInfo}
                        </Flex>
                    </Flex>
                </BoxContainer>
            )}
        </Flex>
    );
};

export default Friend;
