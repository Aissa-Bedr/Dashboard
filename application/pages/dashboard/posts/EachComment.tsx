import Flex from "@/components/build/Flex";
import { Theme } from "@/redux/types/app";
import { AppState, AppStateAction, Comment, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch } from "redux";

interface EachCommentProps extends Comment {
    postId: number;
}

const EachComment: FC<EachCommentProps> = ({ id, postId, commentDescription, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const themeMode = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removeComment(postId: number): void {
        dispatch({ type: "removeComment", payload: { posts: { id: postId }, comments: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Comment removed successfully !`, {
                position: "top-center",
                theme: themeMode,
            });
    }

    function toggleCommentLike(postId: number): void {
        dispatch({ type: "toggleIsLikedComment", payload: { posts: { id: postId }, comments: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(isLiked ? "Comment unliked successfully !" : "Comment liked successfully !", {
                position: "top-center",
                theme: themeMode,
            });
    }

    return (
        <Flex
            className="gap-4 border-solid border-b-[1px] border-b-grey-alt-color dark:border-b-grey-dark-alt-color"
            direction="col"
        >
            <Flex className="gap-2" direction="row" items="center">
                <Image
                    className="rounded-full"
                    src={`/${state.appearance.logo.src}`}
                    alt="logo"
                    width={45}
                    height={45}
                />

                <div className="w-full space-y-1">
                    <Flex direction="row" items="center" justify="between">
                        <p className="text-lg font-bold">
                            {state.generalInfo.firstName} {state.generalInfo.lastName}
                        </p>

                        <FiTrash2
                            className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                            onClick={() => removeComment(postId)}
                        />
                    </Flex>
                </div>
            </Flex>

            <Flex className="py-2" direction="row" items="center" justify="between">
                <p className="font-medium text-center lg:text-left">{commentDescription}</p>

                <AiOutlineHeart
                    className={classNames("duration-300 cursor-pointer", {
                        "text-pink-500": isLiked,
                        "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                    })}
                    size="1.3rem"
                    onClick={() => toggleCommentLike(postId)}
                />
            </Flex>
        </Flex>
    );
};

export default EachComment;
