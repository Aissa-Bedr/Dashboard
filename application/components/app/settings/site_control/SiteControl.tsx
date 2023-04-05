import ContentWrapper from "@/components/build/ContentWrapper";
import LogoContainer from "@/components/build/LogoContainer";
import React, { useEffect } from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import SiteControlInfo from "./SiteControlInfo";
import Flex from "@/components/build/Flex";
import SwitchButton from "@/components/build/SwitchButton";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { TOGGLE_IS_AUTO_SELECT } from "@/redux/constants/toggleTypes";
import changeLightAppearanceAction from "@/redux/actions/change_actions/changeLightAppearanceAction";
import changeDarkAppearanceAction from "@/redux/actions/change_actions/changeDarkAppearanceAction";
import changeButtonComponentAction from "@/redux/actions/change_actions/changeButtonComponentAction";
import changeSwitchButtonComponentAction from "@/redux/actions/change_actions/changeSwitchButtonComponentAction";
import changeInputFieldComponentAction from "@/redux/actions/change_actions/changeInputFieldComponentAction";
import toggleIsAutoSelectAction from "@/redux/actions/toggle_actions/toggleIsAutoSelectAction";

const SiteControl = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.switchBooleans.uiControl.isAutoSelect) {
            if (state.theme === "light") {
                dispatch(
                    changeLightAppearanceAction({
                        theme: "default2",
                        backgroundColor: "bg-[#f1f5f9]",
                        color: "text-[#f1f5f9]",
                    })
                );

                dispatch(changeSwitchButtonComponentAction("secondary"));
                dispatch(changeInputFieldComponentAction("default"));
                dispatch(changeButtonComponentAction("default"));
                return;
            }

            dispatch(
                changeLightAppearanceAction({
                    theme: "default",
                    backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
                    color: "text-blue-color",
                })
            );
            dispatch(
                changeDarkAppearanceAction({
                    theme: "default",
                    backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
                    color: "dark:text-blue-dark-color",
                })
            );

            dispatch(changeSwitchButtonComponentAction("primary"));
            dispatch(changeInputFieldComponentAction("primary"));
            dispatch(changeButtonComponentAction("primary"));
        }
    }, [state.switchBooleans.uiControl.isAutoSelect]);

    useEffect(() => {
        if (state.switchBooleans.uiControl.isAutoSelect) {
            dispatch(toggleIsAutoSelectAction());
        }
    }, [state.theme]);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex direction="row" items="center" justify="between">
                    <PrimaryLogo text="Site control" />

                    {state.switchBooleans.subscribeControl.isAutoSelectEnabled && (
                        <Flex className="gap-4" direction="row" items="center">
                            <SecondaryLogo text="Auto select" />
                            <SwitchButton
                                isChecked={state.switchBooleans.uiControl.isAutoSelect}
                                dispatchType={TOGGLE_IS_AUTO_SELECT}
                            />
                        </Flex>
                    )}
                </Flex>
                <SecondaryLogo text="Control the website if there is maintenance" />
            </LogoContainer>

            <ContentWrapper>
                <SiteControlInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default SiteControl;
