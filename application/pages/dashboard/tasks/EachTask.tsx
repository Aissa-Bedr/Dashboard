import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";
import { TaskProps } from "@/components/app/dashboard/latest_tasks/types/main";
import BoxContainer from "@/components/app/main/BoxContainer";
import Button from "@/components/build/Button";
import removeTaskAction from "@/redux/actions/remove_actions/removeTaskAction";
import completeTaskAction from "@/redux/actions/main_actions/completeTaskAction";
import recoverTaskAction from "@/redux/actions/main_actions/recoverTaskAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const EachTask: FC<TaskProps> = ({ id, content, isCompleted }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeTask(): void {
        dispatch(removeTaskAction(id));
        toast.warning("Task removed successfully !");
        dispatch(pushNotificationAction("Task removed successfully."));
    }

    function completeTask(): void {
        dispatch(completeTaskAction(id));
        toast.success("Task completed successfully !");
        dispatch(pushNotificationAction("Task completed successfully."));
    }

    function recoverTask(): void {
        dispatch(recoverTaskAction(id));
        toast.success("Task recovered successfully !");
        dispatch(pushNotificationAction("Task recovered successfully."));
    }

    return (
        <BoxContainer className="flex flex-row items-center justify-between">
            <p
                className={classNames("duration-300", {
                    "text-grey-dark-color line-through": isCompleted,
                    "text-black dark:text-white": !isCompleted,
                })}
            >
                {content}
            </p>

            <Flex className="gap-4" direction="row" items="center">
                {isCompleted ? (
                    <Button className="px-2 py-1" onClick={recoverTask}>
                        Recover
                    </Button>
                ) : (
                    <Button className="px-2 py-1" onClick={completeTask}>
                        Complete
                    </Button>
                )}

                <button
                    className={classNames(
                        "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                        { "rounded-md": state.switchBooleans.uiControl.isRounded }
                    )}
                    onClick={removeTask}
                >
                    Remove
                </button>
            </Flex>
        </BoxContainer>
    );
};

export default EachTask;
