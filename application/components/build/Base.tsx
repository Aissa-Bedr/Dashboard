import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { BaseProps } from "./types/main";
import { SwitchBooleans } from "@/redux/types/data";

const Base: FC<BaseProps> = ({ className = "", children }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <div
            className={classNames("__base", {
                "mt-14": switchBooleans.uiControl.isNavFixed,
                "p-10": switchBooleans.websiteControl.isZoomIn,
                "p-5": !switchBooleans.websiteControl.isZoomIn,
                [className]: className,
            })}
        >
            {children}
        </div>
    );
};

export default Base;
