import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BoxContainer from "@/components/app/main/BoxContainer";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import EachComment from "./EachComment";
import { Posts } from "@/redux/types/data";
import removePostAction from "@/redux/actions/remove_actions/removePostAction";
import toggleIsLikedPostAction from "@/redux/actions/toggle_actions/toggleIsLikedPostAction";
import addCommentAction from "@/redux/actions/add_actions/addCommentAction";

const EachPost: FC<Posts> = ({ id, postOwner, postTitle, postDescription, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [commentDescription, setCommentDescription] = useState("");
    const [isCommentsActive, setIsCommentsActive] = useState(false);

    const commentsInfo = state.posts.map((post) =>
        post.comments?.map((comment) =>
            post.id === id ? <EachComment key={comment.id} {...comment} postId={id!} /> : null
        )
    );

    function removePost(): void {
        dispatch(removePostAction(id!));
        toast.warning("Post removed successfully !");
    }

    function togglePostLike(): void {
        dispatch(toggleIsLikedPostAction(id!));
        toast.success(isLiked ? "Post unliked successfully !" : "Post liked successfully !");
    }

    const toggleComments = (): void => setIsCommentsActive((prevState) => !prevState);

    function addComment(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!commentDescription) {
            toast.error("Comment can't be empty !");
            return false;
        }

        dispatch(addCommentAction(id!, commentDescription));
        toast.success("Comment added successfully !");

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
                                    className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
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
                        <form onSubmit={addComment}>
                            <Flex className="w-full gap-2" direction="row">
                                <Input
                                    type="text"
                                    placeholder="Write a comment"
                                    value={commentDescription}
                                    onChange={(e) => setCommentDescription(e.target.value)}
                                />
                                <Button className="px-4">Send</Button>
                            </Flex>
                        </form>

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
