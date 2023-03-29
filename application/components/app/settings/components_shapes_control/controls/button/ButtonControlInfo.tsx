import Flex from "@/components/build/Flex";
import { AppState, AppStateAction } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ButtonControlInfoProps } from "../types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

const ButtonControlInfo: FC<ButtonControlInfoProps> = ({ type }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function editButtonType(): void {
        switch (type) {
            case "default":
                dispatch({
                    type: "changeButtonComponent",
                    payload: { components: { button: { type: "default" } } },
                });
                break;

            case "primary":
                dispatch({
                    type: "changeButtonComponent",
                    payload: { components: { button: { type: "primary" } } },
                });
                if (state.appearance.light.theme === "default2") {
                    dispatch({
                        type: "changeLightAppearance",
                        payload: {
                            appearance: {
                                light: {
                                    theme: "default",
                                    backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
                                    color: "text-blue-color",
                                },
                            },
                        },
                    });
                }
                if (state.appearance.dark.theme === "default2") {
                    dispatch({
                        type: "changeDarkAppearance",
                        payload: {
                            appearance: {
                                dark: {
                                    theme: "default",
                                    backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
                                    color: "dark:text-blue-dark-color",
                                },
                            },
                        },
                    });
                }
                break;

            default:
                dispatch({
                    type: "changeButtonComponent",
                    payload: { components: { button: { type: "default" } } },
                });
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
                        type === state.components.button.type && state.theme === "dark",
                    [state.appearance.light.backgroundColor]:
                        type === state.components.button.type && state.theme === "light",
                    "bg-grey-alt-color dark:bg-grey-dark-alt-color": type !== state.components.button.type,
                    "rounded-md": state.switchBooleans.uiControl.isRounded,
                })}
                onClick={editButtonType}
                direction="row"
                items="center"
                justify="center"
            >
                {type === state.components.button.type ? (
                    <HiCheck
                        className={classNames({
                            "text-white": type === state.components.button.type,
                            "text-grey-color dark:text-grey-dark-color": type !== state.components.button.type,
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

export default ButtonControlInfo;
