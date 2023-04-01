import Flex from "@/components/build/Flex";
import { Theme } from "@/redux/types/app";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch } from "redux";
import { Message, FriendProps } from "../types/main";
import SecondaryLogo from "../../main/SecondaryLogo";

interface EachMessageProps extends Message {
    friendId: number;
    friendPictureSrc: string;
    friendName: string;
}

const EachFriend: FC<EachMessageProps> = ({
    id,
    friendId,
    friendPictureSrc,
    friendName,
    messageDescription,
    isLiked,
    isFriendMessage,
}) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const themeMode = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removeMessage(friendId: number): void {
        dispatch({ type: "removeMessage", payload: { friends: { id: friendId }, messages: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Message removed successfully !`, {
                position: "top-center",
                theme: themeMode,
            });
    }

    function toggleMessageLike(friendId: number): void {
        dispatch({ type: "toggleIsLikedMessage", payload: { friends: { id: friendId }, messages: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(isLiked ? "Message unliked successfully !" : "Message liked successfully !", {
                position: "top-center",
                theme: themeMode,
            });
    }

    return (
        <Flex className="gap-4" direction="col">
            <Flex className="gap-2" direction="row" items="center">
                <img
                    className="w-12 h-12 rounded-full"
                    src={isFriendMessage ? `${friendPictureSrc}` : `/${state.appearance.logo.src}`}
                    alt="logo"
                />

                <SecondaryLogo text={isFriendMessage ? `${friendName}` : "You"} />
            </Flex>

            <Flex direction="row" items="center" justify="between">
                <p className="font-medium text-center lg:text-left">{messageDescription}</p>

                <Flex className="gap-2" direction="row" items="center">
                    <AiOutlineHeart
                        className={classNames("duration-300 cursor-pointer", {
                            "text-pink-500": isLiked,
                            "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                        })}
                        size="1.3rem"
                        onClick={() => toggleMessageLike(friendId)}
                    />

                    {!isFriendMessage && (
                        <FiTrash2
                            className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                            onClick={() => removeMessage(friendId)}
                        />
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default EachFriend;
