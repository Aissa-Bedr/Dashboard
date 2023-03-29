import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import UserInfoItem from "./UserInfoItem";

const UserInfo = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="User info" />
                <SecondaryLogo text="Some Information About YourSelf" />
            </LogoContainer>

            <ContentWrapper>
                <UserInfoItem />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default UserInfo;
