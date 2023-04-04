import Flex from "@/components/build/Flex";
import classNames from "classnames";
import React, { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { RemindersInfoItemProps } from "./types/main";
import { toast } from "react-toastify";
import removeReminderAction from "@/redux/actions/remove_actions/removeReminderAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const RemindersInfoItem: FC<RemindersInfoItemProps> = ({ id, title, time, theme }) => {
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
        dispatch(pushNotificationAction("Reminder removed successfully."));
    }

    return (
        <div
            className={classNames(
                "relative pl-6 ml-6 border-solid border-l-[1px] before:absolute before:w-4 before:h-4 before:rounded-full before:-left-7 before:top-1/2 before:-translate-y-1/2",
                { [themeTypes[theme]]: theme }
            )}
        >
            <Flex direction="row" items="center" justify="between">
                <div>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-sm font-medium text-grey-color dark:text-grey-dark-color">{time}</p>
                </div>

                <FiTrash2
                    className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                    onClick={removeReminder}
                />
            </Flex>
        </div>
    );
};

export default RemindersInfoItem;
