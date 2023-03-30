import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, Comment, Posts, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { Dispatch, FC, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@/redux/types/app";
import BoxContainer from "@/components/app/main/BoxContainer";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import EachComment from "./EachComment";

const EachPost: FC<Posts> = ({ id, postOwner, postTitle, postDescription, isLiked, isCommentsActive }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const themeMode = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [commentDescription, setCommentDescription] = useState("");

    const commentsInfo = state.posts.map((post) =>
        post.comments.map((comment) =>
            post.id === id ? <EachComment key={comment.id} {...comment} postId={id!} /> : null
        )
    );

    function removePost(): void {
        dispatch({ type: "removePost", payload: { posts: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Post removed successfully !`, {
                position: "top-center",
                theme: themeMode,
            });
    }

    function togglePostLike(): void {
        dispatch({ type: "toggleIsLikedPost", payload: { posts: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(isLiked ? "Post unliked successfully !" : "Post liked successfully !", {
                position: "top-center",
                theme: themeMode,
            });
    }

    const toggleComments = (): void => dispatch({ type: "toggleIsCommentsActive", payload: { posts: { id } } });

    function addComment(): void | false {
        if (!commentDescription) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Comment can't be empty !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        dispatch({ type: "addComment", payload: { posts: { id }, comments: { commentDescription } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Comment added successfully !`, {
                position: "top-center",
                theme: state.theme,
            });
        setCommentDescription("");
    }

    return (
        <Flex className="gap-4" direction="col">
            <BoxContainer>
                <Flex className="gap-4" direction="col">
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
                                <p className="text-lg font-bold">{postOwner}</p>

                                <FiTrash2
                                    className="cursor-pointer dark:text-grey-dark-color hover:!text-red-color duration-300"
                                    onClick={removePost}
                                />
                            </Flex>
                            <p className="font-medium duration-300 text-grey-color dark:text-grey-dark-color">
                                {postTitle}
                            </p>
                        </div>
                    </Flex>

                    <div className="py-5 border-solid border-y-[1px] border-y-grey-alt-color dark:border-y-grey-dark-alt-color">
                        <p className="font-medium text-center lg:text-left">{postDescription}</p>
                    </div>

                    <Flex direction="row" items="center" justify="between">
                        <AiOutlineHeart
                            className={classNames("duration-300 cursor-pointer", {
                                "text-pink-500": isLiked,
                                "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                            })}
                            size="1.3rem"
                            onClick={togglePostLike}
                        />

                        <IoChatbubblesOutline
                            className={classNames("duration-300 cursor-pointer", {
                                "text-blue-color dark:text-blue-dark-color": isCommentsActive,
                                "text-grey-color dark:text-grey-dark-color hover:!text-blue-color dark:hover:!text-blue-dark-color":
                                    !isCommentsActive,
                            })}
                            size="1.3rem"
                            onClick={toggleComments}
                        />
                    </Flex>
                </Flex>
            </BoxContainer>

            {isCommentsActive && (
                <BoxContainer>
                    <Flex className="gap-4" direction="col">
                        <Flex className="w-full gap-2" direction="row">
                            <Input
                                type="text"
                                placeholder="Write a comment"
                                value={commentDescription}
                                onChange={(e) => setCommentDescription(e.target.value)}
                            />
                            <Button className="px-4" onClick={addComment}>
                                Send
                            </Button>
                        </Flex>

                        <Flex className="gap-2" direction="col">
                            {commentsInfo}
                        </Flex>
                    </Flex>
                </BoxContainer>
            )}
        </Flex>
    );
};

export default EachPost;