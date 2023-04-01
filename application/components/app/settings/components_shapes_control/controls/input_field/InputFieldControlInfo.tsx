import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { InputFieldControlInfoProps } from "../types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import changeInputFieldComponentAction from "@/redux/actions/change_actions/changeInputFieldComponentAction";

const InputFieldControlInfo: FC<InputFieldControlInfoProps> = ({ type }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function editInputFieldType(): void {
        switch (type) {
            case "default":
                dispatch(changeInputFieldComponentAction("default"));
                break;

            case "primary":
                dispatch(changeInputFieldComponentAction("primary"));
                break;

            case "secondary":
                dispatch(changeInputFieldComponentAction("secondary"));
                break;

            default:
                dispatch(changeInputFieldComponentAction("default"));
        }

        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Settings saved successfully !", {
                position: "top-center",
                theme: state.theme,
            });
    }

    return (
        <Flex className="gap-2" direction="col" items="center">
            <Flex
                className={classNames("w-8 h-8 cursor-pointer hover:opacity-80 duration-300", {
                    [state.appearance.dark.backgroundColor]:
                        type === state.components.inputField.type && state.theme === "dark",
                    [state.appearance.light.backgroundColor]:
                        type === state.components.inputField.type && state.theme === "light",
                    "bg-grey-alt-color dark:bg-grey-dark-alt-color": type !== state.components.inputField.type,
                    "rounded-md": state.switchBooleans.uiControl.isRounded,
                })}
                onClick={editInputFieldType}
                direction="row"
                items="center"
                justify="center"
            >
                {type === state.components.inputField.type ? (
                    <HiCheck
                        className={classNames({
                            "text-white": type === state.components.inputField.type,
                            "text-grey-color dark:text-grey-dark-color": type !== state.components.inputField.type,
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

export default InputFieldControlInfo;
