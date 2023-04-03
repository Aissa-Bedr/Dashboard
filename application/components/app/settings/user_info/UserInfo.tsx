import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import UserInfoItem from "./UserInfoItem";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import Subscribe from "@/components/build/Subscribe";

const UserInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="User info" />
                <SecondaryLogo text="Some Information About YourSelf" />
            </LogoContainer>

            <ContentWrapper>
                {state.switchBooleans.subscribeControl.isChangeGeneralAndUserInfoEnabled ? (
                    <UserInfoItem />
                ) : (
                    <Subscribe subscribeType="silver" feature="User information" />
                )}
            </ContentWrapper>
        </BoxContainer>
    );
};

export default UserInfo;
