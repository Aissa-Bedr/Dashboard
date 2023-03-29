import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState, Projects } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import ProjectsInfo from "./ProjectsInfo";

const Projects = () => {
    const projects = useSelector<AppState, Projects[]>((state) => state.projects);

    return (
        <BoxContainer className="col-span-1 xl:col-span-2 2xl:col-span-3">
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Projects" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move href="/dashboard/projects">Show more</Move>
                        <ListLength listName="Projects" listLength={projects.length} />
                    </Flex>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <ProjectsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Projects;
