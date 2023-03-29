import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { SelectProps } from "./types/main";

const Select: FC<SelectProps> = ({ className = "", value, onChange, children }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <select
            className={classNames({
                __default_input_field: state.components.inputField.type === "default",
                __primary_input_field: state.components.inputField.type === "primary",
                __secondary_input_field:
                    state.components.inputField.type !== "default" && state.components.inputField.type !== "primary",
                [className]: className,
                "rounded-md": switchBooleans.uiControl.isRounded,
            })}
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
};

export default Select;
