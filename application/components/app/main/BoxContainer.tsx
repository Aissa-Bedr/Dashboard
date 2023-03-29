import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { BoxContainerProps } from "./types/main";

const BoxContainer: FC<BoxContainerProps> = ({ className = "", dontIncludeSpaces, children }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <div
            className={classNames("__box_container", {
                [`${className}`]: className,
                "rounded-md": switchBooleans.uiControl.isRounded,
                "p-5": !dontIncludeSpaces,
            })}
        >
            {children}
        </div>
    );
};

export default BoxContainer;
