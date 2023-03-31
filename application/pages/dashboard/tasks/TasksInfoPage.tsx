import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import classNames from "classnames";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import EachTask from "./EachTask";
import ListLength from "@/components/build/ListLength";

const TasksInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [content, setContent] = useState("");

    const tasks = state.tasks.map((item) => <EachTask key={item.id} {...item} />);

    function addTask(): void | false {
        if (!content) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Task can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        if (content.length < 2) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Task can't be less than two characters !`, { position: "top-center", theme: state.theme });
            return false;
        }

        for (const item of state.tasks) {
            if (item.content.match(content) && item.content.length === content.length) {
                switchBooleans.websiteControl.isNotificationActive &&
                    toast.error(`Task ${item.content} already exist !`, {
                        position: "top-center",
                        theme: state.theme,
                    });
                return false;
            }
        }

        dispatch({ type: "addTask", payload: { tasks: { content } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Task ${content} added successfully !`, { position: "top-center", theme: state.theme });
        setContent("");
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Input
                    type="text"
                    placeholder="Enter a new task"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Tasks" listLength={tasks.length} />

                    <Button className="px-2 py-1" onClick={addTask}>
                        Add task
                    </Button>
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
