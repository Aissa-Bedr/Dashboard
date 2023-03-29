import classNames from "classnames";
import React, { FC } from "react";
import { GridColumns, GridProps } from "./types/main";

const Grid: FC<GridProps> = ({ children, className = "", cols }) => {
    const gridColumns: GridColumns = {
        "1": "grid-cols-1",
        "2": "grid-cols-2",
        "3": "grid-cols-3",
        "4": "grid-cols-4",
    };

    return <div className={classNames("grid", { [gridColumns[cols]]: cols, [className]: className })}>{children}</div>;
};

export default Grid;
