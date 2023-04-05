import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import SkillsInfo from "./SkillsInfo";
import { Skill } from "./types/main";

const SkillsControl = () => {
    const skills = useSelector<AppState, Skill[]>((state) => state.skills);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Skills control" />

                    <ListLength listName="Skills" listLength={skills.length} />
                </Flex>
                <SecondaryLogo text="Add or remove skills according to your interests" />
            </LogoContainer>

            <ContentWrapper>
                <SkillsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default SkillsControl;
