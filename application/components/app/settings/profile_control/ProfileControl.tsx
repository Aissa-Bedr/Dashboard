import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";

const ProfileControl = () => {
    return (
        <BoxContainer className="col-span-3">
            <LogoContainer>
                <PrimaryLogo text="Profile control" />
                <SecondaryLogo text="Profile Information About Your Account" />
            </LogoContainer>

            <ContentWrapper>
                <p>Hello !</p>
            </ContentWrapper>
        </BoxContainer>
    );
};

export default ProfileControl;
