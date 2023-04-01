import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TicketsInfoItemProps } from "./types/main";

const TicketsInfoItem: FC<TicketsInfoItemProps> = ({ icon, firstSecContent, secondSecContent }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <>
            <Flex
                className={classNames(
                    "border-solid border-[1px] border-grey-alt-color dark:border-grey-dark-alt-color p-5",
                    { "rounded-md": state.switchBooleans.uiControl.isRounded }
                )}
                direction="col"
                items="center"
                justify="center"
            >
                {icon}
                <p className="text-2xl font-bold">{firstSecContent}</p>
                <p className="text-sm capitalize text-grey-color dark:text-grey-dark-color">{secondSecContent}</p>
            </Flex>
        </>
    );
};

export default TicketsInfoItem;
