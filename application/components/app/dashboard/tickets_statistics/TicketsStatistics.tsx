import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import TicketsInfo from "./TicketsInfo";

const TicketsStatistics = () => {
    return (
        <BoxContainer>
            <Flex direction="col">
                <LogoContainer>
                    <PrimaryLogo text="Tickets statistics" />
                    <SecondaryLogo text="Everything about support tickets" />
                </LogoContainer>

                <ContentWrapper>
                    <TicketsInfo />
                </ContentWrapper>
            </Flex>
        </BoxContainer>
    );
};

export default TicketsStatistics;
