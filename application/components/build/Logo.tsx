import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { LogoProps } from "./types/main";

const Logo: FC<LogoProps> = ({ content }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <div
            className={classNames("__logo", {
                "before:rounded-l-md after:rounded-r-md": switchBooleans.uiControl.isRounded,
            })}
        >
            {content}
        </div>
    );
};

export default Logo;
