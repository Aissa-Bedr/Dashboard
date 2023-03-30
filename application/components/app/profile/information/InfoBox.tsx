import Flex from "@/components/build/Flex";
import SwitchButton from "@/components/build/SwitchButton";
import classNames from "classnames";
import React, { FC } from "react";
import SecondaryLogo from "../../main/SecondaryLogo";
import { InfoBoxProps } from "./types/main";

const InfoBox: FC<InfoBoxProps> = ({ title, isChecked, dispatchType, children }) => {
    return (
        <Flex
            className={classNames(
                "w-full gap-4 xl:gap-2 p-2 xl:items-start xl:justify-start __border_b hover:bg-[#f1f5f9] dark:hover:bg-[#1a1d21] duration-300",
                { "opacity-0": isChecked }
            )}
            direction="col"
            items="center"
            justify="center"
        >
            <SecondaryLogo text={title} />

            <Flex
                className="w-full xl:flex-row xl:justify-between gap-3 xl:gap-0"
                direction="col"
                items="center"
                justify="center"
            >
                {children}

                <SwitchButton isChecked={isChecked} dispatchType={dispatchType} />
            </Flex>
        </Flex>
    );
};

export default InfoBox;
