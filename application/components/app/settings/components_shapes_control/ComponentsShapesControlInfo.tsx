import ControlsCSItem from "@/components/build/ControlsCSItem";
import Flex from "@/components/build/Flex";
import React from "react";
import ButtonControl from "./controls/button/ButtonControl";
import InputFieldControl from "./controls/input_field/InputFieldControl";
import SwitchButtonControl from "./controls/switch_button/SwitchButtonControl";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import SecondaryLogo from "../../main/SecondaryLogo";

const ComponentsShapesControlInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex direction="col">
            <ControlsCSItem title="Switch button" dontIncludePadTop>
                {state.switchBooleans.subscribeControl.isChangeComponentsShapesEnabled ? (
                    <SwitchButtonControl />
                ) : (
                    <SecondaryLogo text="Subscribe first to access this feature" />
                )}
            </ControlsCSItem>

            <ControlsCSItem title="Input field">
                {state.switchBooleans.subscribeControl.isChangeComponentsShapesEnabled ? (
                    <InputFieldControl />
                ) : (
                    <SecondaryLogo text="Subscribe first to access this feature" />
                )}
            </ControlsCSItem>

            <ControlsCSItem title="Button" dontIncludeBorBottom>
                {state.switchBooleans.subscribeControl.isChangeComponentsShapesEnabled ? (
                    <ButtonControl />
                ) : (
                    <SecondaryLogo text="Subscribe first to access this feature" />
                )}
            </ControlsCSItem>
        </Flex>
    );
};

export default ComponentsShapesControlInfo;
