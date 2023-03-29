import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { SwitchButtonProps } from "./types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiRadioCircle } from "react-icons/bi";
import { TbMinusVertical } from "react-icons/tb";
import classNames from "classnames";

const SwitchButton: FC<SwitchButtonProps> = ({ isChecked, dispatchType }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    return (
        <div
            className={classNames({
                __default_switch_btn_container: state.components.switchButton.type === "default",
                __primary_switch_btn_container: state.components.switchButton.type === "primary",
                __secondary_switch_btn_container:
                    state.components.switchButton.type !== "default" &&
                    state.components.switchButton.type !== "primary",
                [state.appearance.dark.backgroundColor]: state.theme === "dark" && isChecked,
                [state.appearance.light.backgroundColor]: state.theme === "light" && isChecked,
                "bg-grey-alt-color dark:bg-grey-dark-alt-color": !isChecked,
            })}
            onClick={() => {
                dispatch({ type: dispatchType });
                switchBooleans.websiteControl.isNotificationActive &&
                    toast.success("Settings saved successfully !", {
                        position: "top-center",
                        theme: state.theme,
                    });
            }}
        >
            <div
                className={classNames("z-10", {
                    __default_switch_btn_switcher: state.components.switchButton.type === "default",
                    __primary_switch_btn_switcher: state.components.switchButton.type === "primary",
                    __secondary_switch_btn_switcher:
                        state.components.switchButton.type !== "default" &&
                        state.components.switchButton.type !== "primary",
                    "bg-white dark:bg-grey-dark-color": state.appearance.dark.theme === "default" || !isChecked,
                    "bg-white": isChecked,
                    "!left-[50px]": state.components.switchButton.type === "default" && isChecked,
                    "!left-[34px]":
                        (state.components.switchButton.type === "primary" && isChecked) ||
                        (state.components.switchButton.type === "secondary" && isChecked),
                })}
            >
                {state.components.switchButton.type === "default" ? (
                    isChecked ? (
                        <HiCheck
                            className={classNames({
                                [state.appearance.dark.color]: state.theme === "dark",
                                [state.appearance.light.color]: state.theme === "light",
                            })}
                        />
                    ) : (
                        <HiX
                            className={classNames({
                                [state.appearance.dark.color]: state.theme === "dark" && isChecked,
                                [state.appearance.light.color]: state.theme === "light" && isChecked,
                                "text-grey-alt-color dark:text-grey-dark-alt-color": !isChecked,
                            })}
                        />
                    )
                ) : state.components.switchButton.type === "primary" ? (
                    ""
                ) : (
                    ""
                )}
            </div>
            {state.components.switchButton.type === "primary" && (
                <>
                    {isChecked ? (
                        <TbMinusVertical className={classNames("absolute left-2 text-white")} />
                    ) : (
                        <BiRadioCircle
                            className={classNames("absolute right-2 text-grey-color dark:text-grey-dark-color")}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default SwitchButton;
