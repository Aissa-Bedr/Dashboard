import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import SkillsInfo from "./SkillsInfo";
import { Skill } from "./types/main";

const SkillsControl = () => {
    const skills = useSelector<AppState, Skill[]>((state) => state.skills);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Skills control" />
                    <div
                        className={classNames(
                            "text-center uppercase bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                            { "rounded-md": switchBooleans.uiControl.isRounded }
                        )}
                    >
                        Skills: {skills.length}
                    </div>
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
