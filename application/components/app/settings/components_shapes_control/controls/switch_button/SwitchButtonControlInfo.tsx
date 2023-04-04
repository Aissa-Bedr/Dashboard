import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { SwitchButtonControlInfoProps } from "../types/main";
import { toast } from "react-toastify";
import classNames from "classnames";
import changeSwitchButtonComponentAction from "@/redux/actions/change_actions/changeSwitchButtonComponentAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const SwitchButtonControlInfo: FC<SwitchButtonControlInfoProps> = ({ type }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function editSwitchButtonType(): void {
        switch (type) {
            case "default":
                dispatch(changeSwitchButtonComponentAction("default"));
                break;

            case "primary":
                dispatch(dispatch(changeSwitchButtonComponentAction("primary")));
                break;

            case "secondary":
                dispatch(dispatch(changeSwitchButtonComponentAction("secondary")));
                break;

            default:
                dispatch(dispatch(changeSwitchButtonComponentAction("default")));
        }

        toast.success("Settings saved successfully !");
        dispatch(pushNotificationAction("Settings saved successfully."));
    }

    return (
        <Flex className="gap-2" direction="col" items="center">
            <Flex
                className={classNames("w-8 h-8 cursor-pointer hover:opacity-80 duration-300", {
                    [state.appearance.dark.backgroundColor]:
                        type === state.components.switchButton.type && state.theme === "dark",
                    [state.appearance.light.backgroundColor]:
                        type === state.components.switchButton.type && state.theme === "light",
                    "bg-grey-alt-color dark:bg-grey-dark-alt-color": type !== state.components.switchButton.type,
                    "rounded-md": state.switchBooleans.uiControl.isRounded,
                })}
                onClick={editSwitchButtonType}
                direction="row"
                items="center"
                justify="center"
            >
                {type === state.components.switchButton.type ? (
                    <HiCheck
                        className={classNames({
                            "text-white": type === state.components.switchButton.type,
                            "text-grey-color dark:text-grey-dark-color": type !== state.components.switchButton.type,
                            "!text-black dark:!text-white": state.appearance.light.theme === "default2",
                        })}
                        size="1.1rem"
                    />
                ) : (
                    ""
                )}
            </Flex>

            <p className="__secondary_logo">{type}</p>
        </Flex>
    );
};

export default SwitchButtonControlInfo;
