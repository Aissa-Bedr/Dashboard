import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AppearanceInfoItemProps, BackgroundThemes } from "./types/main";
import { toast } from "react-toastify";
import classNames from "classnames";
import Flex from "@/components/build/Flex";
import changeDarkAppearanceAction from "@/redux/actions/change_actions/changeDarkAppearanceAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const AppearanceDarkInfoItem: FC<AppearanceInfoItemProps> = ({ backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

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
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "default",
                        backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
                        color: "dark:text-blue-dark-color",
                    })
                );
                break;

            case "default2":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "default2",
                        backgroundColor: "dark:bg-[#1a1d21]",
                        color: "dark:text-[#1a1d21]",
                    })
                );
                break;

            case "red":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "red",
                        backgroundColor: "dark:bg-red-color",
                        color: "dark:text-red-color",
                    })
                );
                break;

            case "green":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "green",
                        backgroundColor: "dark:bg-green-color",
                        color: "dark:text-green-color",
                    })
                );
                break;

            case "orange":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "orange",
                        backgroundColor: "dark:bg-orange-color",
                        color: "dark:text-orange-color",
                    })
                );
                break;

            case "purple":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "purple",
                        backgroundColor: "dark:bg-purple-color",
                        color: "dark:text-purple-color",
                    })
                );
                break;

            case "pink":
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "pink",
                        backgroundColor: "dark:bg-pink-color",
                        color: "dark:text-pink-color",
                    })
                );
                break;

            default:
                dispatch(
                    changeDarkAppearanceAction({
                        theme: "default",
                        backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
                        color: "dark:text-blue-dark-color",
                    })
                );
        }

        toast.success("Color theme saved successfully !");
        dispatch(pushNotificationAction("Color theme saved successfully."));
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
