import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SocailMediaStatsInfo from "./SocailMediaStatsInfo";

const SocialMediaStats = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Social media stats" />
            </LogoContainer>

            <ContentWrapper>
                <SocailMediaStatsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default SocialMediaStats;
