import React, { FC } from "react";
import { SubscribeButtonProps } from "../types/main";
import { logoBackgroundColors } from "./PlanLogo";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";

const SubscribeButton: FC<SubscribeButtonProps> = ({ backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <button
            className={classNames("w-fit text-sm font-semibold py-1 px-2", {
                "rounded-md": state.switchBooleans.uiControl.isRounded,
                [logoBackgroundColors[backgroundColor]]: backgroundColor,
            })}
        >
            Subscribe
        </button>
    );
};

export default SubscribeButton;
