import Flex from "@/components/build/Flex";
import React from "react";
import InputFieldControlInfo from "./InputFieldControlInfo";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { HiCog } from "react-icons/hi2";

const InputFieldControl = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex
            direction="row"
            items="center"
            justify={state.switchBooleans.uiControl.isAutoSelect ? "start" : "between"}
        >
            {state.switchBooleans.uiControl.isAutoSelect ? (
                <HiCog className="text-grey-color dark:text-grey-dark-color animate-spin" size="2rem" />
            ) : (
                <>
                    <InputFieldControlInfo type="default" />

                    <InputFieldControlInfo type="primary" />

                    <InputFieldControlInfo type="secondary" />
                </>
            )}
        </Flex>
    );
};

export default InputFieldControl;
