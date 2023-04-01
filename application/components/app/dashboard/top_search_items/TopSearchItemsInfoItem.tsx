import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TopSearchItemsInfoItemProps } from "./types/main";

const TopSearchItemsInfoItem: FC<TopSearchItemsInfoItemProps> = ({ keyWord, searchCount }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex className="w-full" direction="row" items="center" justify="between">
            <p className="text-lg font-medium">{keyWord}</p>

            <div
                className={classNames(
                    "px-2 py-1 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color",
                    { "rounded-md": state.switchBooleans.uiControl.isRounded }
                )}
            >
                <p className="text-sm">{searchCount}</p>
            </div>
        </Flex>
    );
};

export default TopSearchItemsInfoItem;
