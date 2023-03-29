import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import dynamic from "next/dynamic";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import { TaskProps } from "./types/main";

const TasksInfo = dynamic(() => import("./TasksInfo"), { ssr: false });

const LatestTasks = () => {
    const tasks = useSelector<AppState, TaskProps[]>((state) => state.tasks);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <BoxContainer>
            <Flex className="w-full" direction="row" items="center" justify="between">
                <PrimaryLogo text="Latest tasks" />
                <div
                    className={classNames(
                        "text-center uppercase bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                        { "rounded-md": switchBooleans.uiControl.isRounded }
                    )}
                >
                    Tasks: {tasks.length}
                </div>
            </Flex>

            <ContentWrapper>
                <TasksInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestTasks;
