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

const TasksInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    const tasks = state.tasks.map((item) => <Task key={item.id} {...item} />);

    function addTask(): void | false {
        if (!content) {
            toast.error("Task can't be empty !");
            return false;
        }

        if (content.length < 2) {
            toast.error("Task can't be less than two characters !");
            return false;
        }

        for (const item of state.tasks) {
            if (item.content.match(content) && item.content.length === content.length) {
                toast.error(`Task ${item.content} already exist !`);
                return false;
            }
        }

        dispatch(addTaskAction(content));
        toast.success(`Task ${content} added successfully !`);

        setContent("");
    }

    return (
        <div className={classNames({ "h-80 overflow-y-scroll pr-1": state.tasks.length >= 8 })}>
            <Flex className="w-full gap-2" direction="row" items="center">
                <Input
                    type="text"
                    placeholder="Enter a new task"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Button className="w-1/4 px-2 !py-[7px]" onClick={addTask}>
                    <p className="hidden lg:block">Add task</p>
                    <p className="block lg:hidden">Add</p>
                </Button>
            </Flex>

            {state.tasks.length > 0 ? (
                <Grid className="gap-2 mt-2" cols="1">
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
