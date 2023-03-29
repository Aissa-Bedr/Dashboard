import { AppState, AppStateAction } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AppearanceInfoItemProps, BackgroundThemes } from "./types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import Flex from "@/components/build/Flex";

const AppearanceDarkInfoItem: FC<AppearanceInfoItemProps> = ({ backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const darkBackgroundThemes: BackgroundThemes = {
        default: "bg-blue-dark-alt-color",
        default2: "bg-[#1a1d21]",
        red: "bg-red-color",
        green: "bg-green-color",
        orange: "bg-orange-color",
        purple: "bg-purple-color",
        pink: "bg-pink-color",
    };

    function editDarkThemeColor(): void {
        switch (backgroundColor) {
            case "default":
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
                break;

            case "default2":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "default2",
                                backgroundColor: "dark:bg-[#1a1d21]",
                                color: "dark:text-[#1a1d21]",
                            },
                        },
                    },
                });
                break;

            case "red":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "red",
                                backgroundColor: "dark:bg-red-color",
                                color: "dark:text-red-color",
                            },
                        },
                    },
                });
                break;

            case "green":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "green",
                                backgroundColor: "dark:bg-green-color",
                                color: "dark:text-green-color",
                            },
                        },
                    },
                });
                break;

            case "orange":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "orange",
                                backgroundColor: "dark:bg-orange-color",
                                color: "dark:text-orange-color",
                            },
                        },
                    },
                });
                break;

            case "purple":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "purple",
                                backgroundColor: "dark:bg-purple-color",
                                color: "dark:text-purple-color",
                            },
                        },
                    },
                });
                break;

            case "pink":
                dispatch({
                    type: "changeDarkAppearance",
                    payload: {
                        appearance: {
                            dark: {
                                theme: "pink",
                                backgroundColor: "dark:bg-pink-color",
                                color: "dark:text-pink-color",
                            },
                        },
                    },
                });
                break;

            default:
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

        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Color theme saved successfully !", {
                position: "top-center",
                theme: state.theme,
            });
    }

    return (
        <Flex
            className={classNames("w-8 h-8 cursor-pointer hover:opacity-80 duration-300", {
                [darkBackgroundThemes[backgroundColor]]: backgroundColor,
                "rounded-full": state.switchBooleans.uiControl.isRounded,
            })}
            onClick={editDarkThemeColor}
            direction="row"
            items="center"
            justify="center"
        >
            {backgroundColor === state.appearance.dark.theme ? <HiCheck className="text-white" size="1.1rem" /> : ""}
        </Flex>
    );
};

export default AppearanceDarkInfoItem;
