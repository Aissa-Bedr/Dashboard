import classNames from "classnames";
import React, { FC } from "react";
import Flex from "./Flex";
import { ControlsCSItemProps } from "./types/main";

const ControlsCSItem: FC<ControlsCSItemProps> = ({ title, dontIncludePadTop, dontIncludeBorBottom, children }) => {
    return (
        <Flex
            className={classNames("gap-3", {
                __border_b: !dontIncludeBorBottom,
                "pb-4": dontIncludePadTop,
                "py-4": !dontIncludePadTop,
            })}
            direction="col"
        >
            <p className="__secondary_logo">{title}</p>

            {children}
        </Flex>
    );
};

export default ControlsCSItem;
