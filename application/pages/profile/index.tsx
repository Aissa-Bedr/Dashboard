import { themeSwitcher } from "@/assests/logic/script";
import Information from "@/components/app/profile/information/Information";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import { Theme } from "@/redux/types/app";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Profile" />

            <Base>
                <Logo content="Profile" />

                <BaseWrapper>
                    <Information />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Profile;
