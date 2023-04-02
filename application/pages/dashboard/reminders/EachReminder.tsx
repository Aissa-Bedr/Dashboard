import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RemindersInfoItemProps } from "@/components/app/dashboard/reminders/types/main";
import BoxContainer from "@/components/app/main/BoxContainer";
import removeReminderAction from "@/redux/actions/remove_actions/removeReminderAction";

const EachReminder: FC<RemindersInfoItemProps> = ({ id, title, time, theme }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const themeTypes = {
        blue: "before:bg-blue-color dark:before:bg-blue-dark-color border-l-blue-color dark:border-l-blue-dark-color",
        green: "border-l-green-color before:bg-green-color",
        orange: "border-l-orange-color before:bg-orange-color",
        red: "border-l-red-color before:bg-red-color",
    };

    function removeReminder(): void {
        dispatch(removeReminderAction(id!));
        toast.warning("Reminder removed successfully !");
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
                            { "rounded-md": state.switchBooleans.uiControl.isRounded }
                        )}
                        onClick={removeReminder}
                    >
                        Remove
                    </button>

                    <div
                        className={classNames(
                            "px-2 py-1 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color",
                            { "rounded-md": state.switchBooleans.uiControl.isRounded }
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
