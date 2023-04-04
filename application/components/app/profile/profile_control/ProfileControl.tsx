import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import ProfileControlItem from "./ProfileControlItem";

const ProfileControl = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Profile control" />
                <SecondaryLogo text="Profile Information About Your Account" />
            </LogoContainer>

            <ContentWrapper>
                <ProfileControlItem />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default ProfileControl;
