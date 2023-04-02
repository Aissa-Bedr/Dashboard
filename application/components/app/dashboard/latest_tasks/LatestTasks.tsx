import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import { AppState } from "@/redux/types/main";
import dynamic from "next/dynamic";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import { TaskProps } from "./types/main";

const TasksInfo = dynamic(() => import("./TasksInfo"), { ssr: false });

const LatestTasks = () => {
    const tasks = useSelector<AppState, TaskProps[]>((state) => state.tasks);

    return (
        <BoxContainer>
            <Flex className="w-full" direction="row" items="center" justify="between">
                <PrimaryLogo text="Latest tasks" />

                <ListLength listName="Tasks" listLength={tasks.length} />
            </Flex>

            <ContentWrapper>
                <TasksInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestTasks;
