import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import QuickDraftInfo from "./QuickDraftInfo";

const QuickDraft = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Quick draft" />
                <SecondaryLogo text="Write a draft for your ideas" />
            </LogoContainer>

            <ContentWrapper>
                <QuickDraftInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default QuickDraft;
