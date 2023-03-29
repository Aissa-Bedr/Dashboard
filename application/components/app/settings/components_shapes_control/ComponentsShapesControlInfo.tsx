import ControlsCSItem from "@/components/build/ControlsCSItem";
import Flex from "@/components/build/Flex";
import React from "react";
import ButtonControl from "./controls/button/ButtonControl";
import InputFieldControl from "./controls/input_field/InputFieldControl";
import SwitchButtonControl from "./controls/switch_button/SwitchButtonControl";

const ComponentsShapesControlInfo = () => {
    return (
        <Flex direction="col">
            <ControlsCSItem title="Switch button" dontIncludePadTop>
                <SwitchButtonControl />
            </ControlsCSItem>

            <ControlsCSItem title="Input field">
                <InputFieldControl />
            </ControlsCSItem>

            <ControlsCSItem title="Button" dontIncludeBorBottom>
                <ButtonControl />
            </ControlsCSItem>
        </Flex>
    );
};

export default ComponentsShapesControlInfo;
