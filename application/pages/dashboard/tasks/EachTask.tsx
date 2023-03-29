import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@/redux/types/app";
import classNames from "classnames";
import { TaskProps } from "@/components/app/dashboard/latest_tasks/types/main";
import BoxContainer from "@/components/app/main/BoxContainer";
import Button from "@/components/build/Button";

const EachTask: FC<TaskProps> = ({ id, content, isCompleted }) => {
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
                        { "rounded-md": switchBooleans.uiControl.isRounded }
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
