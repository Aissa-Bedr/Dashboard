import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestPostInfo from "./LatestPostInfo";

const LatestPost = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Latest post" />
            </LogoContainer>

            <ContentWrapper>
                <LatestPostInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestPost;
