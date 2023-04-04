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

const TasksInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    const tasks = state.tasks.map((item) => <EachTask key={item.id} {...item} />);

    function addTask(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

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

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.tasks.length >= 10) {
                toast.error("You cannot add more than 10 tasks Projects Subscribe to activate unlimited data.");
                return false;
            }
        }

        dispatch(addTaskAction(content));
        toast.success(`Task ${content} added successfully !`);

        setContent("");
    }

    return (
        <>
            <BoxContainer className="col-span-3">
                <form className="flex flex-col gap-4" onSubmit={addTask}>
                    <Input
                        type="text"
                        placeholder="Enter a new task"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <Flex direction="row" items="center" justify="between">
                        <ListLength listName="Tasks" listLength={tasks.length} />

                        <Button className="px-2 py-1">Add task</Button>
                    </Flex>
                </form>
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
