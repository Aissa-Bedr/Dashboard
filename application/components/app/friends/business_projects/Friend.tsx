import React, { FC, useState } from "react";
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

const Friend: FC<FriendProps> = ({ id, pictureSrc, name, job, isLiked }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [isChatActive, setIsChatActive] = useState(false);

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

    return (
        <BoxContainer>
            <Flex className="gap-4" direction="col">
                <Flex direction="row" items="center" justify="between">
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
                </Flex>

                <Flex className="gap-4 lg:items-start lg:justify-start" direction="col" items="center" justify="center">
                    <img className="w-24 h-24 rounded-full" src={pictureSrc} alt={`${name}_picture`} />

                    <p className="text-lg font-medium">{name}</p>

                    <p className="text-sm font-semibold text-grey-color dark:text-grey-dark-color">
                        {!job.startsWith("@") && "@"}
                        {job}
                    </p>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default Friend;
