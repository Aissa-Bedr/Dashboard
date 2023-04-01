import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import { TaskProps } from "@/components/app/dashboard/latest_tasks/types/main";
import BoxContainer from "@/components/app/main/BoxContainer";
import Button from "@/components/build/Button";
import removeTaskAction from "@/redux/actions/remove_actions/removeTaskAction";
import completeTaskAction from "@/redux/actions/main_actions/completeTaskAction";
import recoverTaskAction from "@/redux/actions/main_actions/recoverTaskAction";

const EachTask: FC<TaskProps> = ({ id, content, isCompleted }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeTask(): void {
        dispatch(removeTaskAction(id));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Task removed successfully !`, { position: "top-center", theme: state.theme });
    }

    function completeTask(): void {
        dispatch(completeTaskAction(id));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Task completed successfully !`, { position: "top-center", theme: state.theme });
    }

    function recoverTask(): void {
        dispatch(recoverTaskAction(id));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Task recovered successfully !`, { position: "top-center", theme: state.theme });
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
