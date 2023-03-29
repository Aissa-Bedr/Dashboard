import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TicketsInfoItemProps } from "./types/main";

const TicketsInfoItem: FC<TicketsInfoItemProps> = ({ icon, firstSecContent, secondSecContent }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <Flex
                className={classNames(
                    "border-solid border-[1px] border-grey-alt-color dark:border-grey-dark-alt-color p-5",
                    { "rounded-md": switchBooleans.uiControl.isRounded }
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
