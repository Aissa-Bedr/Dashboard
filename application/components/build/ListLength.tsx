import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ListLengthProps } from "./types/main";

const ListLength: FC<ListLengthProps> = ({ listName, listLength }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <div
            className={classNames(
                "text-center uppercase bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                { "rounded-md": state.switchBooleans.uiControl.isRounded }
            )}
        >
            {listName}: {listLength}
        </div>
    );
};

export default ListLength;
