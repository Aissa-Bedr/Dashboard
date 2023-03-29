import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import GeneralInfoItem from "./GeneralInfoItem";

const GeneralInfo = () => {
    return (
        <BoxContainer className="col-span-3 2xl:col-span-1">
            <LogoContainer>
                <PrimaryLogo text="General info" />
                <SecondaryLogo text="General Information About Your Account" />
            </LogoContainer>

            <ContentWrapper>
                <GeneralInfoItem />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default GeneralInfo;
