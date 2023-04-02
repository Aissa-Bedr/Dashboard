import { themeSwitcher } from "@/assests/logic/script";
import AppearanceControl from "@/components/app/settings/appearance_control/AppearanceControl";
import ComponentsShapesControl from "@/components/app/settings/components_shapes_control/ComponentsShapesControl";
import GeneralInfo from "@/components/app/settings/general_info/GeneralInfo";
import SiteControl from "@/components/app/settings/site_control/SiteControl";
import SkillsControl from "@/components/app/settings/skills_info/SkillsControl";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Settings = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, []);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, [state.theme]);

    return (
        <>
            <Header title="Aissa | Settings" />

            <Base>
                <SearchBar />

                <Logo content="settings" />

                <BaseWrapper>
                    <SiteControl />
                    <GeneralInfo />
                    <SkillsControl />
                    <AppearanceControl />
                    <ComponentsShapesControl />
                </BaseWrapper>

                {state.switchBooleans.websiteControl.isNotificationActive && (
                    <ToastContainer position="top-center" theme={state.theme} />
                )}
            </Base>
        </>
    );
};

export default Settings;
