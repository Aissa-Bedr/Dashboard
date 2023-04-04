import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { toast } from "react-toastify";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import classNames from "classnames";
import Grid from "@/components/build/Grid";
import addTaskAction from "@/redux/actions/add_actions/addTaskAction";
import Details from "@/components/build/Details";
import Move from "@/components/build/Move";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const TasksInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    const tasks = state.tasks.map((item) => <Task key={item.id} {...item} />);

    function addTask(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!content) {
            toast.error("Task can't be empty !");
            dispatch(pushNotificationAction("Task can't be empty."));
            return false;
        }

        if (content.length < 2) {
            toast.error("Task can't be less than two characters !");
            dispatch(pushNotificationAction("Task can't be less than two characters."));
            return false;
        }

        for (const item of state.tasks) {
            if (item.content.match(content) && item.content.length === content.length) {
                toast.error(`Task ${item.content} already exist !`);
                dispatch(pushNotificationAction(`Task ${item.content} already exist.`));
                return false;
            }
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.tasks.length >= 10) {
                toast.error("You cannot add more than 10 tasks Subscribe to activate unlimited data.");
                dispatch(
                    pushNotificationAction("You cannot add more than 10 tasks Subscribe to activate unlimited data.")
                );
                return false;
            }
        }

        dispatch(addTaskAction(content));
        toast.success(`Task ${content} added successfully !`);
        dispatch(pushNotificationAction(`Task ${content} added successfully.`));

        setContent("");
    }

    return (
        <div className={classNames("space-y-2", { "h-80 overflow-y-scroll pr-1": state.tasks.length >= 8 })}>
            <form onSubmit={addTask}>
                <Flex className="w-full gap-2" direction="row" items="center">
                    <Input
                        type="text"
                        placeholder="Enter a new task"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <Button className="w-1/4 px-2 !py-[7px]">
                        <p className="hidden lg:block">Add task</p>
                        <p className="block lg:hidden">Add</p>
                    </Button>
                </Flex>
            </form>

            <Details note="Links">
                <Flex className="px-4 py-2" direction="row" items="center" justify="between">
                    <Move href="/dashboard/tasks" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                        Tasks
                    </Move>
                </Flex>
            </Details>

            {state.tasks.length > 0 ? (
                <Grid className="gap-2" cols="1">
                    {tasks}
                </Grid>
            ) : (
                <div
                    className={classNames("__data_list_empty", {
                        "rounded-md": state.switchBooleans.uiControl.isRounded,
                    })}
                >
                    No tasks to show !
                </div>
            )}
        </div>
    );
};

export default TasksInfo;
