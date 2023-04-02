import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EachMessageProps } from "../types/main";
import SecondaryLogo from "../../main/SecondaryLogo";
import removeMessageAction from "@/redux/actions/remove_actions/removeMessageAction";
import toggleIsLikedMessageAction from "@/redux/actions/toggle_actions/toggleIsLikedMessageAction";

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
    const dispatch = useDispatch();

    function removeMessage(friendId: string): void {
        dispatch(removeMessageAction(friendId, id!));
        toast.warning("Message removed successfully !");
    }

    function toggleMessageLike(friendId: string): void {
        dispatch(toggleIsLikedMessageAction(friendId, id!));
        toast.success(isLiked ? "Message unliked successfully !" : "Message liked successfully !");
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
