import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import SecondaryLogo from "../../main/SecondaryLogo";

const LatestPostInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    const latestPost = [...state.posts].shift();

    return (
        <Flex className="gap-4" direction="col">
            <Flex className="gap-2" direction="row" items="center">
                <Image
                    className="rounded-full"
                    src={`/${state.appearance.logo.src}`}
                    alt="logo"
                    width={45}
                    height={45}
                />

                <div className="space-y-1">
                    <p className="text-lg font-bold">
                        {latestPost
                            ? latestPost?.postOwner
                            : `${state.generalInfo.firstName} ${state.generalInfo.lastName}`}
                    </p>
                    <SecondaryLogo text={latestPost ? latestPost?.postTitle : state.quickDraft.title} />
                </div>
            </Flex>

            <div className="py-5 border-solid border-y-[1px] border-y-grey-alt-color dark:border-y-grey-dark-alt-color">
                <p className="font-medium text-center capitalize lg:text-left">
                    {latestPost ? latestPost?.postDescription : state.quickDraft.content}
                </p>
            </div>

            <Flex direction="row" items="center" justify="between">
                <AiOutlineHeart
                    className={classNames("duration-300 cursor-pointer", {
                        "text-pink-500": latestPost?.isLiked,
                        "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !latestPost?.isLiked,
                    })}
                    size="1.3rem"
                />

                <IoChatbubblesOutline
                    className={classNames("duration-300 cursor-pointer", {
                        "text-blue-color dark:text-blue-dark-color": latestPost?.isCommentsActive,
                        "text-grey-color dark:text-grey-dark-color hover:!text-blue-color dark:hover:!text-blue-dark-color":
                            !latestPost?.isCommentsActive,
                    })}
                    size="1.3rem"
                />
            </Flex>
        </Flex>
    );
};

export default LatestPostInfo;
