import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import Move from "@/components/build/Move";
import { AppState } from "@/redux/types/main";
import dynamic from "next/dynamic";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import { TaskProps } from "./types/main";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const TasksInfo = dynamic(() => import("./TasksInfo"), { ssr: false });

const LatestTasks = () => {
    const tasks = useSelector<AppState, TaskProps[]>((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <BoxContainer>
            <Flex className="w-full" direction="row" items="center" justify="between">
                <PrimaryLogo text="Latest tasks" />

                <Flex className="gap-2" direction="row" items="center">
                    <Move href="/dashboard/tasks" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                        Show more
                    </Move>
                    <ListLength listName="Tasks" listLength={tasks.length} />
                </Flex>
            </Flex>

            <ContentWrapper>
                <TasksInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestTasks;
