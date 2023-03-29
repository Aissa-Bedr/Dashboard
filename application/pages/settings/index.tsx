import { themeSwitcher } from "@/assests/logic/script";
import AppearanceControl from "@/components/app/settings/appearance_control/AppearanceControl";
import ComponentsShapesControl from "@/components/app/settings/components_shapes_control/ComponentsShapesControl";
import GeneralInfo from "@/components/app/settings/general_info/GeneralInfo";
import ProfileControl from "@/components/app/settings/profile_control/ProfileControl";
import SiteControl from "@/components/app/settings/site_control/SiteControl";
import SkillsControl from "@/components/app/settings/skills_info/SkillsControl";
import UserInfo from "@/components/app/settings/user_info/UserInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Grid from "@/components/build/Grid";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import { Theme } from "@/redux/types/app";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Settings = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Settings" />

            <Base>
                <Logo content="settings" />

                <BaseWrapper>
                    <SiteControl />
                    <GeneralInfo />
                    <SkillsControl />
                    <AppearanceControl />
                    <ProfileControl />
                    <ComponentsShapesControl />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Settings;
