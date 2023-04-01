import React, { FC } from "react";
import { LogoBackgroundColors, PlanLogoProps } from "../types/main";
import Flex from "@/components/build/Flex";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";

export const logoBackgroundColors: LogoBackgroundColors = {
    green: "bg-[#CDF0EA] text-dark",
    silver: "bg-[#f1f5f9] text-dark",
    gold: "bg-[#FDFFBC] text-dark",
    platinum: "bg-[#DAEAF1] text-dark",
    super: "bg-purple-300 dark:bg-purple-200 text-dark",
    max: "bg-red-300 dark:bg-red-200 text-dark",
};

const PlanLogo: FC<PlanLogoProps> = ({ subscribeType, price, logoBackgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex
            className={classNames("gap-4 p-4", {
                "rounded-md": state.switchBooleans.uiControl.isRounded,
                [logoBackgroundColors[logoBackgroundColor]]: logoBackgroundColor,
            })}
            direction="col"
            items="center"
            justify="center"
        >
            <p className="text-lg font-medium uppercase">{subscribeType}</p>

            <p className="text-lg font-medium">${price}</p>
        </Flex>
    );
};

export default PlanLogo;
