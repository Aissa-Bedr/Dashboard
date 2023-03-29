import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@/redux/types/app";
import { RemindersInfoItemProps } from "@/components/app/dashboard/reminders/types/main";
import BoxContainer from "@/components/app/main/BoxContainer";

const EachReminder: FC<RemindersInfoItemProps> = ({ id, title, time, theme }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const themeMode = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const themeTypes = {
        blue: "before:bg-blue-color dark:before:bg-blue-dark-color border-l-blue-color dark:border-l-blue-dark-color",
        green: "border-l-green-color before:bg-green-color",
        orange: "border-l-orange-color before:bg-orange-color",
        red: "border-l-red-color before:bg-red-color",
    };

    function removeReminder(): void {
        dispatch({ type: "removeReminder", payload: { reminders: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Reminder removed successfully !`, { position: "top-center", theme: themeMode });
    }

    return (
        <>
            <BoxContainer>
                <div className="py-6 __border_b">
                    <Flex className="gap-2" direction="row" items="center" justify="center">
                        <div
                            className={classNames(
                                "relative border-solid border-l-[1px] before:absolute before:w-6 before:h-6 before:rounded-full before:-left-7 before:top-1/2 before:-translate-y-1/2",
                                { [themeTypes[theme]]: theme }
                            )}
                        ></div>

                        <p>{title}</p>
                    </Flex>
                </div>

                <Flex className="mt-2" direction="row" items="center" justify="between">
                    <button
                        className={classNames(
                            "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                            { "rounded-md": switchBooleans.uiControl.isRounded }
                        )}
                        onClick={removeReminder}
                    >
                        Remove
                    </button>

                    <div
                        className={classNames(
                            "px-2 py-1 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color",
                            { "rounded-md": switchBooleans.uiControl.isRounded }
                        )}
                    >
                        <p className="text-sm">{time}</p>
                    </div>
                </Flex>
            </BoxContainer>
        </>
    );
};

export default EachReminder;
