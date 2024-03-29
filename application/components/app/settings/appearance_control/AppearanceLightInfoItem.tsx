import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AppearanceInfoItemProps, BackgroundThemes } from "./types/main";
import { toast } from "react-toastify";
import classNames from "classnames";
import Flex from "@/components/build/Flex";
import changeLightAppearanceAction from "@/redux/actions/change_actions/changeLightAppearanceAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const AppearanceLightInfoItem: FC<AppearanceInfoItemProps> = ({ backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const lightBackgroundThemes: BackgroundThemes = {
        default: "bg-blue-color",
        default2: "bg-[#f1f5f9]",
        red: "bg-red-color",
        green: "bg-green-color",
        orange: "bg-orange-color",
        purple: "bg-purple-color",
        pink: "bg-pink-color",
    };

    function editLightThemeColor(): void {
        switch (backgroundColor) {
            case "default":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "default",
                        backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
                        color: "text-blue-color",
                    })
                );
                break;

            case "default2":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "default2",
                        backgroundColor: "bg-[#f1f5f9]",
                        color: "text-[#f1f5f9]",
                    })
                );
                break;

            case "red":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "red",
                        backgroundColor: "bg-red-color",
                        color: "text-red-color",
                    })
                );
                break;

            case "green":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "green",
                        backgroundColor: "bg-green-color",
                        color: "text-green-color",
                    })
                );
                break;

            case "orange":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "orange",
                        backgroundColor: "bg-orange-color",
                        color: "text-orange-color",
                    })
                );
                break;

            case "purple":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "purple",
                        backgroundColor: "bg-purple-color",
                        color: "text-purple-color",
                    })
                );
                break;

            case "pink":
                dispatch(
                    changeLightAppearanceAction({
                        theme: "pink",
                        backgroundColor: "bg-pink-color",
                        color: "text-pink-color",
                    })
                );
                break;

            default:
                dispatch(
                    changeLightAppearanceAction({
                        theme: "default",
                        backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
                        color: "text-blue-color",
                    })
                );
        }

        toast.success("Color theme saved successfully !");
        dispatch(pushNotificationAction("Color theme saved successfully."));
    }

    return (
        <Flex
            className={classNames("w-8 h-8 cursor-pointer hover:opacity-80 duration-300", {
                [lightBackgroundThemes[backgroundColor]]: backgroundColor,
                "rounded-full": state.switchBooleans.uiControl.isRounded,
            })}
            onClick={editLightThemeColor}
            direction="row"
            items="center"
            justify="center"
        >
            {backgroundColor === state.appearance.light.theme ? (
                <HiCheck
                    className={classNames("text-white", {
                        "!text-black": state.appearance.light.theme === "default2",
                    })}
                    size="1.1rem"
                />
            ) : (
                ""
            )}
        </Flex>
    );
};

export default AppearanceLightInfoItem;
