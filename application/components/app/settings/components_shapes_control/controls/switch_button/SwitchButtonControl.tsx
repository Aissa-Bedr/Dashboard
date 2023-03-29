import Flex from "@/components/build/Flex";
import React from "react";
import SwitchButtonControlInfo from "./SwitchButtonControlInfo";

const SwitchButtonControl = () => {
    return (
        <Flex direction="row" items="center" justify="between">
            <SwitchButtonControlInfo type="default" />

            <SwitchButtonControlInfo type="primary" />

            <SwitchButtonControlInfo type="secondary" />
        </Flex>
    );
};

export default SwitchButtonControl;
