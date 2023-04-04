import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EachCommentProps } from "./types/main";
import removeCommentAction from "@/redux/actions/remove_actions/removeCommentAction";
import toggleIsLikedCommentAction from "@/redux/actions/toggle_actions/toggleIsLikedCommentAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const EachComment: FC<EachCommentProps> = ({ id, postId, commentDescription, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeComment(postId: string): void {
        dispatch(removeCommentAction(postId, id!));
        toast.warning("Comment removed successfully !");
        dispatch(pushNotificationAction("Comment removed successfully."));
    }

    function toggleCommentLike(postId: string): void {
        dispatch(toggleIsLikedCommentAction(postId, id!));
        toast.success(isLiked ? "Comment unliked successfully !" : "Comment liked successfully !");
        dispatch(pushNotificationAction(isLiked ? "Comment unliked successfully." : "Comment liked successfully."));
    }

    return (
        <Flex className="gap-4 __border_b" direction="col">
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
                            {state.information.generalInfo.firstName} {state.information.generalInfo.lastName}
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
