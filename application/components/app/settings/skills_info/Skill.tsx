import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skill } from "./types/main";
import { toast } from "react-toastify";
import classNames from "classnames";
import removeSkillAction from "@/redux/actions/remove_actions/removeSkillAction";

const Skill: FC<Skill> = ({ id, content }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeTask(): void {
        dispatch(removeSkillAction(id!));
        toast.warning("Skill removed successfully !");
    }

    return (
        <div
            className={classNames(
                "px-2 py-1 text-center bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-white duration-300 cursor-pointer",
                { "rounded-md": state.switchBooleans.uiControl.isRounded }
            )}
            onClick={removeTask}
        >
            <p>{content}</p>
        </div>
    );
};

export default Skill;
