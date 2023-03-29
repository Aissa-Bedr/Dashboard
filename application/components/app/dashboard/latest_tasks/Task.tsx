import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { FC } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { TaskProps } from "./types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@/redux/types/app";
import classNames from "classnames";

const Task: FC<TaskProps> = ({ id, content, isCompleted }) => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removeTask(): void {
        dispatch({ type: "removeTask", payload: { tasks: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Task removed successfully !`, { position: "top-center", theme });
    }

    function completeTask(): void {
        dispatch({ type: "completeTask", payload: { tasks: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Task completed successfully !`, { position: "top-center", theme });
    }

    function recoverTask(): void {
        dispatch({ type: "recoverTask", payload: { tasks: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Task recovered successfully !`, { position: "top-center", theme });
    }

    return (
        <Flex
            className={classNames(
                "w-full px-2 py-1 bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-white duration-300",
                { "rounded-md": switchBooleans.uiControl.isRounded }
            )}
            direction="row"
            items="center"
            justify="between"
        >
            <p
                className={classNames("duration-300", {
                    "text-grey-dark-color line-through": isCompleted,
                    "text-black dark:text-white": !isCompleted,
                })}
            >
                {content}
            </p>

            <Flex className="gap-2" direction="row" items="center">
                {isCompleted ? (
                    <AiOutlineReload
                        className="cursor-pointer dark:text-grey-dark-color hover:!text-green-color duration-300"
                        onClick={recoverTask}
                    />
                ) : (
                    <HiOutlineCheck
                        className="cursor-pointer dark:text-grey-dark-color hover:!text-blue-color dark:hover:!text-blue-dark-color duration-300"
                        onClick={completeTask}
                    />
                )}
                <FiTrash2
                    className="cursor-pointer dark:text-grey-dark-color hover:!text-red-color duration-300"
                    onClick={removeTask}
                />
            </Flex>
        </Flex>
    );
};

export default Task;
