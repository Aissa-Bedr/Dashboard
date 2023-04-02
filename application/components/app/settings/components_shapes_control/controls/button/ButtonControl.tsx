import Flex from "@/components/build/Flex";
import React from "react";
import ButtonControlInfo from "./ButtonControlInfo";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { HiCog } from "react-icons/hi2";

const ButtonControl = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex direction="row" items="center" justify={state.switchBooleans.uiControl.isAutoSelect ? "start" : "evenly"}>
            {state.switchBooleans.uiControl.isAutoSelect ? (
                <HiCog className="text-grey-color dark:text-grey-dark-color animate-spin" size="2rem" />
            ) : (
                <>
                    <ButtonControlInfo type="default" />

                    <ButtonControlInfo type="primary" />
                </>
            )}
        </Flex>
    );
};

export default ButtonControl;
