import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LastProjectProgressInfo from "./LastProjectProgressInfo";

const LastProjectProgress = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Last project progress" />
            </LogoContainer>

            <ContentWrapper>
                <LastProjectProgressInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LastProjectProgress;
