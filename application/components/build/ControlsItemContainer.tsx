import classNames from "classnames";
import React, { FC } from "react";
import { ControlsItemContainerProps } from "./types/main";

const ControlsItemContainer: FC<ControlsItemContainerProps> = ({
    children,
    dontIncludePadTop,
    dontIncludeBorBottom,
}) => {
    return (
        <div
            className={classNames("__controls_item_container", {
                __border_b: !dontIncludeBorBottom,
                "pb-4": dontIncludePadTop,
                "py-4": !dontIncludePadTop,
            })}
        >
            {children}
        </div>
    );
};

export default ControlsItemContainer;
