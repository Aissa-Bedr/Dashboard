import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import EachTask from "./EachTask";
import ListLength from "@/components/build/ListLength";
import addTaskAction from "@/redux/actions/add_actions/addTaskAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";
import Select from "@/components/build/Select";
import { TaskOptions } from "./types/main";
import { FilterKey } from "./types/app";

const TasksInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [taskOptions, setTaskOptions] = useState<TaskOptions>({
        content: "",
        filterKey: "task",
        filterValue: "",
    });

    const tasks = state.tasks
        .filter((task) =>
            taskOptions.filterKey === "task"
                ? task.content.includes(taskOptions.filterValue)
                : taskOptions.filterKey === "completed"
                ? task.isCompleted
                : !task.isCompleted
        )
        .map((item) => <EachTask key={item.id} {...item} />);

    function addTask(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!taskOptions.content) {
            toast.error("Task can't be empty !");
            dispatch(pushNotificationAction("Task can't be empty."));
            return false;
        }

        if (taskOptions.content.length < 2) {
            toast.error("Task can't be less than two characters !");
            dispatch(pushNotificationAction("Task can't be less than two characters."));
            return false;
        }

        for (const item of state.tasks) {
            if (item.content.match(taskOptions.content) && item.content.length === taskOptions.content.length) {
                toast.error(`Task ${item.content} already exist !`);
                dispatch(pushNotificationAction(`Task ${item.content} already exist.`));
                return false;
            }
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.tasks.length >= 10) {
                toast.error("You cannot add more than 10 tasks Projects Subscribe to activate unlimited data.");
                dispatch(
                    pushNotificationAction(
                        "You cannot add more than 10 tasks Projects Subscribe to activate unlimited data."
                    )
                );
                return false;
            }
        }

        dispatch(addTaskAction(taskOptions.content));
        toast.success(`Task ${taskOptions.content} added successfully !`);
        dispatch(pushNotificationAction(`Task ${taskOptions.content} added successfully.`));

        setTaskOptions((prevState) => ({ ...prevState, content: "" }));
    }

    return (
        <>
            <BoxContainer className="col-span-3">
                <form className="flex flex-col gap-4" onSubmit={addTask}>
                    <Input
                        type="text"
                        placeholder="Enter a new task"
                        value={taskOptions.content}
                        onChange={(e) => setTaskOptions((prevState) => ({ ...prevState, content: e.target.value }))}
                    />

                    <Flex direction="row" items="center" justify="between">
                        <ListLength listName="Tasks" listLength={tasks.length} />

                        <Button className="px-2 py-1">Add task</Button>
                    </Flex>
                </form>
            </BoxContainer>

            <BoxContainer className="col-span-3">
                <Flex className="gap-2" direction="col">
                    <Select
                        value={taskOptions.filterKey}
                        onChange={(e) =>
                            setTaskOptions((prevState) => ({ ...prevState, filterKey: e.target.value as FilterKey }))
                        }
                    >
                        <option
                            className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                            value="task"
                        >
                            Task
                        </option>
                        <option
                            className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                            value="completed"
                        >
                            Completed
                        </option>
                        <option
                            className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                            value="notCompleted"
                        >
                            Not completed
                        </option>
                    </Select>

                    {taskOptions.filterKey === "task" && (
                        <Input
                            type="text"
                            placeholder="Search tasks..."
                            value={taskOptions.filterValue}
                            onChange={(e) =>
                                setTaskOptions((prevState) => ({ ...prevState, filterValue: e.target.value }))
                            }
                        />
                    )}
                </Flex>
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.tasks.length > 0 ? (
                    <Grid className="gap-4" cols="1">
                        {tasks}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No tasks to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default TasksInfoPage;
