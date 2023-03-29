import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import YearlyInfo from "./YearlyInfo";

const YearlyTargets = () => {
    return (
        <BoxContainer>
            <Flex direction="col">
                <LogoContainer>
                    <PrimaryLogo text="Yearly targets" />
                    <SecondaryLogo text="Targets of the year" />
                </LogoContainer>
            </Flex>

            <ContentWrapper>
                <YearlyInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default YearlyTargets;
