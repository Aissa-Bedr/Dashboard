import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { InputProps } from "./types/main";

const Input: FC<InputProps> = ({ id, className = "", type, placeholder, value, onChange, onFocus, onBlur }) => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <input
            id={id}
            className={classNames({
                __default_input_field: state.components.inputField.type === "default",
                __primary_input_field: state.components.inputField.type === "primary",
                __secondary_input_field:
                    state.components.inputField.type !== "default" && state.components.inputField.type !== "primary",
                [className]: className,
                "rounded-md": state.switchBooleans.uiControl.isRounded,
            })}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default Input;
