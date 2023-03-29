import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import SiteControlInfo from "./SiteControlInfo";

const SiteControl = () => {
    return (
        <BoxContainer className="col-span-1 xl:col-span-2 2xl:col-span-3">
            <LogoContainer>
                <PrimaryLogo text="Site control" />
                <SecondaryLogo text="Control the website if there is maintenance" />
            </LogoContainer>

            <ContentWrapper>
                <SiteControlInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default SiteControl;
