import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "react-toastify";
import { Dispatch } from "redux";
import { Skill } from "./types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";

const Skill: FC<Skill> = ({ id, content }) => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removeTask(): void {
        dispatch({ type: "removeSkill", payload: { skills: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Skill removed successfully !`, { position: "top-center", theme });
    }

    return (
        <div
            className={classNames(
                "px-2 py-1 text-center bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-white duration-300 cursor-pointer",
                { "rounded-md": switchBooleans.uiControl.isRounded }
            )}
            onClick={removeTask}
        >
            <p>{content}</p>
        </div>
    );
};

export default Skill;
