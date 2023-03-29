import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import AppearanceInfo from "./AppearanceInfo";

const AppearanceControl = () => {
    return (
        <BoxContainer className="col-span-3 2xl:col-span-1">
            <LogoContainer>
                <PrimaryLogo text="Appearance control" />
                <SecondaryLogo text="Control the website appearance theme if there is maintenance" />
            </LogoContainer>

            <ContentWrapper>
                <AppearanceInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default AppearanceControl;
