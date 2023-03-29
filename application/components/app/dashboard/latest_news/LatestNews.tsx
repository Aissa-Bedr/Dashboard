import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestNewsInfo from "./LatestNewsInfo";

const LatestNews = () => {
    return (
        <BoxContainer>
            <Flex direction="col">
                <LogoContainer>
                    <PrimaryLogo text="Latest news" />
                </LogoContainer>

                <ContentWrapper>
                    <LatestNewsInfo />
                </ContentWrapper>
            </Flex>
        </BoxContainer>
    );
};

export default LatestNews;
