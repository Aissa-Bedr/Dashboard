import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import ProjectsInfo from "./ProjectsInfo";
import { Projects } from "@/redux/types/data";

const Projects = () => {
    const projects = useSelector<AppState, Projects[]>((state) => state.projects);

    return (
        <BoxContainer className="col-span-1 xl:col-span-2 2xl:col-span-3">
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Projects" />

                    <ListLength listName="Projects" listLength={projects.length} />
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <ProjectsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Projects;
