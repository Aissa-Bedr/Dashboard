import Flex from "@/components/build/Flex";
import React from "react";
import InputFieldControlInfo from "./InputFieldControlInfo";

const InputFieldControl = () => {
    return (
        <Flex direction="row" items="center" justify="between">
            <InputFieldControlInfo type="default" />

            <InputFieldControlInfo type="primary" />

            <InputFieldControlInfo type="secondary" />
        </Flex>
    );
};

export default InputFieldControl;
