import classNames from "classnames";
import React, { FC } from "react";
import { ContainerProps } from "./types/main";

const Container: FC<ContainerProps> = ({ className = "", children }) => {
    return (
        <div
            className={classNames("w-screen h-screen overflow-x-hidden bg-white dark:bg-[#212529]", {
                [className]: className,
            })}
        >
            {children}
        </div>
    );
};

export default Container;
