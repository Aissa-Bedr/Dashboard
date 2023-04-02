import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ButtonProps } from "./types/main";

const Button: FC<ButtonProps> = ({ className = "", onClick, children }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <button
            className={classNames({
                __default_button: state.components.button.type === "default",
                [`__primary_button ${state.appearance.dark.color}`]:
                    state.components.button.type !== "default" && state.theme === "dark",
                [`__primary_button ${state.appearance.light.color}`]:
                    state.components.button.type !== "default" && state.theme === "light",
                "!text-black dark:!text-white":
                    state.appearance.light.theme === "default2" && state.components.button.type === "default",
                [state.appearance.dark.backgroundColor]: state.theme === "dark",
                [state.appearance.light.backgroundColor]: state.theme === "light",
                [className]: className,
                "rounded-md": state.switchBooleans.uiControl.isRounded,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
