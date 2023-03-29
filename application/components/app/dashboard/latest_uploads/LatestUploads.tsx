import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestUploadsInfo from "./LatestUploadsInfo";

const LatestUploads = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Latest uploads" />
            </LogoContainer>

            <ContentWrapper>
                <LatestUploadsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestUploads;
