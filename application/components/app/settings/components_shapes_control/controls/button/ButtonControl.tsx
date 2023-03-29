import Flex from "@/components/build/Flex";
import React from "react";
import ButtonControlInfo from "./ButtonControlInfo";

const ButtonControl = () => {
    return (
        <Flex direction="row" items="center" justify="evenly">
            <ButtonControlInfo type="default" />

            <ButtonControlInfo type="primary" />
        </Flex>
    );
};

export default ButtonControl;
