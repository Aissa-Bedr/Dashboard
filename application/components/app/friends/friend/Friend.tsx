import React, { FC, useState } from "react";
import BoxContainer from "../../main/BoxContainer";
import { FriendProps } from "../types/main";
import Flex from "@/components/build/Flex";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import classNames from "classnames";
import { HiArrowSmLeft } from "react-icons/hi";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import EachFriend from "./EachFriend";
import { friendMessage } from "./script";
import toggleIsLikedFriendAction from "@/redux/actions/toggle_actions/toggleIslikedFriendAction";
import clearChatAction from "@/redux/actions/main_actions/clearChatAction";
import sendMessageAction from "@/redux/actions/add_actions/sendMessaageAction";
import removeFriendAction from "@/redux/actions/remove_actions/removeFriendAction";

const Friend: FC<FriendProps> = ({ id, pictureSrc, name, job, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [friendOptions, setFriendOptions] = useState({
        messageDescription: "",
        isChatActive: false,
    });

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
        dispatch(removeFriendAction(id!));
        toast.warning("Friend removed successfully !");
    }

    function toggleFriendLike(): void {
        dispatch(toggleIsLikedFriendAction(id!));
        toast.success(isLiked ? "Friend unliked successfully !" : "Friend liked successfully !");
    }

    const toggleChat = (): void =>
        setFriendOptions((prevState) => ({ ...prevState, isChatActive: !prevState.isChatActive }));

    function addMessage(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!friendOptions.messageDescription) {
            toast.error("Message can't be empty !");
            return false;
        }

        dispatch(
            sendMessageAction(id!, { isFriendMessage: false, messageDescription: friendOptions.messageDescription })
        );

        friendMessage(friendOptions.messageDescription, 1500, name, id!, { state, dispatch });

        toast.success("Message sent successfully !");

        setFriendOptions((prevState) => ({ ...prevState, messageDescription: "" }));
    }

    function clearChat(): void {
        dispatch(clearChatAction(id!));
        toast.success("Chat cleared successfully !");
    }

    return (
        <Flex className="gap-4" direction="col">
            <BoxContainer className="relative">
                <Flex className="gap-4" direction="col">
                    <Flex direction="row" items="center" justify="between">
                        {friendOptions.isChatActive ? (
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

                    {friendOptions.isChatActive ? (
                        <Flex direction="row" items="center" justify="between">
                            <Flex className="gap-2" direction="row" items="center">
                                <img className="w-12 h-12 rounded-full" src={pictureSrc} alt={`${name}_picture`} />

                                <p className="text-lg font-medium">{name}</p>
                            </Flex>

                            <button
                                className={classNames(
                                    "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                                    { "rounded-md": state.switchBooleans.uiControl.isRounded }
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

            {friendOptions.isChatActive && (
                <BoxContainer>
                    <Flex className="gap-4" direction="col">
                        <form onSubmit={addMessage}>
                            <Flex className="w-full gap-2" direction="row">
                                <Input
                                    type="text"
                                    placeholder="Write a message"
                                    value={friendOptions.messageDescription}
                                    onChange={(e) =>
                                        setFriendOptions((prevState) => ({
                                            ...prevState,
                                            messageDescription: e.target.value,
                                        }))
                                    }
                                />
                                <Button className="px-4">Send</Button>
                            </Flex>
                        </form>

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
