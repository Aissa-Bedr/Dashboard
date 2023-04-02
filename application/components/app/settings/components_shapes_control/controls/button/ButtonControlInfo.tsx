import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { ButtonControlInfoProps } from "../types/main";
import { toast } from "react-toastify";
import classNames from "classnames";
import changeButtonComponentAction from "@/redux/actions/change_actions/changeButtonComponentAction";
import changeLightAppearanceAction from "@/redux/actions/change_actions/changeLightAppearanceAction";
import changeDarkAppearanceAction from "@/redux/actions/change_actions/changeDarkAppearanceAction";

const ButtonControlInfo: FC<ButtonControlInfoProps> = ({ type }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function editButtonType(): void {
        switch (type) {
            case "default":
                dispatch(changeButtonComponentAction("default"));
                break;

            case "primary":
                dispatch(changeButtonComponentAction("primary"));
                if (state.appearance.light.theme === "default2") {
                    dispatch(
                        changeLightAppearanceAction({
                            theme: "default",
                            backgroundColor: "bg-blue-color hover:bg-blue-alt-color",
                            color: "text-blue-color",
                        })
                    );
                }
                if (state.appearance.dark.theme === "default2") {
                    dispatch(
                        changeDarkAppearanceAction({
                            theme: "default",
                            backgroundColor: "dark:bg-blue-dark-color dark:hover:bg-blue-dark-alt-color",
                            color: "dark:text-blue-dark-color",
                        })
                    );
                }
                break;

            default:
                dispatch(changeButtonComponentAction("default"));
        }

        toast.success("Settings saved successfully !");
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
