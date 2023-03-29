import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, Posts, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { Dispatch, FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@/redux/types/app";
import { LatestUploadsInfoItemProps } from "@/components/app/dashboard/latest_uploads/types/main";
import SecondaryLogo from "@/components/app/main/SecondaryLogo";
import BoxContainer from "@/components/app/main/BoxContainer";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";

const EachPost: FC<Posts> = ({ id, postOwner, postTitle, postDescription, isLiked, isCommentsActive }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const themeMode = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removePost(): void {
        dispatch({ type: "removePost", payload: { posts: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Post removed successfully !`, {
                position: "top-center",
                theme: themeMode,
            });
    }

    function toggleLikes(): void {
        dispatch({ type: "toggleIsLiked", payload: { posts: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(isLiked ? "Post unliked successfully !" : "Post liked successfully !", {
                position: "top-center",
                theme: themeMode,
            });
    }

    const toggleComments = (): void => dispatch({ type: "toggleIsCommentsActive", payload: { posts: { id } } });

    return (
        <>
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
                            <SecondaryLogo text={postTitle} />
                        </div>
                    </Flex>

                    <div className="py-5 border-solid border-y-[1px] border-y-grey-alt-color dark:border-y-grey-dark-alt-color">
                        <p className="font-medium text-center capitalize lg:text-left">{postDescription}</p>
                    </div>

                    <Flex direction="row" items="center" justify="between">
                        <AiOutlineHeart
                            className={classNames("duration-300 cursor-pointer", {
                                "text-pink-500": isLiked,
                                "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                            })}
                            size="1.3rem"
                            onClick={toggleLikes}
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
        </>
    );
};

export default EachPost;
