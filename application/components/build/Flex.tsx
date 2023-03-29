import classNames from "classnames";
import React, { FC } from "react";
import { FlexDirections, FlexItems, FlexJustify, FlexProps } from "./types/main";

const Flex: FC<FlexProps> = ({ id, className = "", children, onClick, direction, items, justify }) => {
    const flexDirections: FlexDirections = {
        row: "flex-row",
        "row-reverse": "flex-row-reverse",
        col: "flex-col",
        "col-reverse": "flex-col-reverse",
    };

    const flexItems: FlexItems = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
    };

    const flexJustify: FlexJustify = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
    };

    return (
        <div
            id={id}
            className={classNames("flex", {
                [flexDirections[direction]]: direction,
                [flexItems[items!]]: items,
                [flexJustify[justify!]]: justify,
                [className]: className,
            })}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Flex;
