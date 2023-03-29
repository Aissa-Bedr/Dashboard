import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import SecondaryLogo from "../../main/SecondaryLogo";

const LatestPostInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

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
                        {state.generalInfo.firstName} {state.generalInfo.lastName}
                    </p>
                    <SecondaryLogo text={state.quickDraft.title} />
                </div>
            </Flex>

            <div className="py-5 border-solid border-y-[1px] border-y-grey-alt-color dark:border-y-grey-dark-alt-color">
                <p className="font-medium text-center capitalize lg:text-left">{state.quickDraft.content}</p>
            </div>

            <Flex direction="row" items="center" justify="between">
                <Flex className="gap-2" direction="row" items="center">
                    <AiOutlineHeart
                        className="duration-300 cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-pink-500"
                        size="1.3rem"
                    />
                    <p className="text-grey-color dark:text-grey-dark-color">1.8k</p>
                </Flex>

                <Flex className="gap-2" direction="row" items="center">
                    <IoChatbubblesOutline
                        className="duration-300 cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-blue-color dark:hover:!text-blue-dark-color"
                        size="1.3rem"
                    />
                    <p className="text-grey-color dark:text-grey-dark-color">500</p>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default LatestPostInfo;
