import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { LatestNewsInfoItemProps } from "./types/main";

const LatestNewsInfoItem: FC<LatestNewsInfoItemProps> = ({
    src,
    firstSecContent,
    secondSecContent,
    thirdSecContent,
    dontIncludeBorder,
}) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <Flex
                className={classNames("gap-2 pb-4 lg:flex-row lg:gap-0", {
                    __border_b: !dontIncludeBorder,
                })}
                direction="col"
                items="center"
                justify="between"
            >
                <Flex className="gap-4 text-center lg:flex-row lg:text-left" direction="col" items="center">
                    <Image
                        className={classNames({ "rounded-md": switchBooleans.uiControl.isRounded })}
                        src={src}
                        alt="bg_image"
                        width={100}
                        height={100}
                    />

                    <div className="space-y-1">
                        <p className="text-lg font-semibold capitalize">{firstSecContent}</p>
                        <p className="text-sm font-medium capitalize text-grey-color dark:text-grey-dark-color">
                            {secondSecContent}
                        </p>
                    </div>
                </Flex>

                <div
                    className={classNames(
                        "capitalize py-0.5 px-2 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color text-sm",
                        { "rounded-md": switchBooleans.uiControl.isRounded }
                    )}
                >
                    {thirdSecContent}
                </div>
            </Flex>
        </>
    );
};

export default LatestNewsInfoItem;
