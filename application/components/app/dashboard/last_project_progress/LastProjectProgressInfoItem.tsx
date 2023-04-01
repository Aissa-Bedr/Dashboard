import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { LastProjectProgressInfoItemProps, StatusTypes } from "./types/main";

const LastProjectProgressInfoItem: FC<LastProjectProgressInfoItemProps> = ({ title, status }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    const statusTypes: StatusTypes = {
        "in progress": "text-orange-color",
        pending: "text-blue-color dark:text-blue-dark-color",
        completed: "text-green-color",
        rejected: "text-red-color",
    };

    return (
        <Flex className="lg:flex-row lg:justify-between" direction="col" items="center" justify="center">
            <Flex className="gap-4" direction="row" items="center">
                <div
                    className={classNames("hidden lg:block relative w-8 h-8 duration-300 rounded-full", {
                        [state.appearance.dark.backgroundColor]: state.theme === "dark",
                        [state.appearance.light.backgroundColor]: state.theme === "light",
                    })}
                ></div>
                <p className="text-lg font-medium text-black capitalize dark:text-grey-dark-color">{title}</p>
            </Flex>

            <div
                className={classNames(
                    "uppercase px-2 py-1 text-sm font-semibold bg-grey-alt-color dark:bg-grey-dark-alt-color",
                    { [statusTypes[status]]: status, "rounded-md": state.switchBooleans.uiControl.isRounded }
                )}
            >
                {status}
            </div>
        </Flex>
    );
};

export default LastProjectProgressInfoItem;
