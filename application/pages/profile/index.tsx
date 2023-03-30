import { themeSwitcher } from "@/assests/logic/script";
import Information from "@/components/app/profile/information/Information";
import ProfileControl from "@/components/app/profile/profile_control/ProfileControl";
import GeneralInfo from "@/components/app/settings/general_info/GeneralInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
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
                <SearchBar />

                <Logo content="Profile" />

                <BaseWrapper>
                    <Information />
                    <GeneralInfo />
                    <div className="!col-span-2">
                        <ProfileControl />
                    </div>
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Profile;
