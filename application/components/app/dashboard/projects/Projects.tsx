import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState, Projects, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import ProjectsInfo from "./ProjectsInfo";

const Projects = () => {
    const projects = useSelector<AppState, Projects[]>((state) => state.projects);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <BoxContainer className="col-span-1 xl:col-span-2 2xl:col-span-3">
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Projects" />
                    <div
                        className={classNames(
                            "text-center uppercase bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                            { "rounded-md": switchBooleans.uiControl.isRounded }
                        )}
                    >
                        Projects: {projects.length}
                    </div>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <ProjectsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Projects;
