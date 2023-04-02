import React, { FC } from "react";
import { DetailsProps } from "./types/main";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";

const Details: FC<DetailsProps> = ({ note, children, className = "" }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <details
            className={classNames("w-full p-2 __border bg-[#f1f5f9] dark:bg-[#1a1d21]", {
                "rounded-md": state.switchBooleans.uiControl.isRounded,
                [className]: className,
            })}
        >
            <summary className="text-sm font-semibold capitalize cursor-pointer">{note}</summary>

            {children}
        </details>
    );
};

export default Details;
