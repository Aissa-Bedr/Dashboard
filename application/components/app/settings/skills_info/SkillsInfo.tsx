import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skill from "./Skill";
import { toast } from "react-toastify";
import classNames from "classnames";
import Button from "@/components/build/Button";
import Input from "@/components/build/Input";
import Grid from "@/components/build/Grid";
import addSkillAction from "@/redux/actions/add_actions/addSkillAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const SkillsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [content, setContent] = useState("");

    const skills = state.skills.map((skill) => <Skill key={skill.id} {...skill} />);

    function addSkill(e: React.FormEvent<HTMLFormElement>): void | false {
        e.preventDefault();

        if (!content) {
            toast.error("Skill can't be empty !");
            dispatch(pushNotificationAction("Skill can't be empty."));
            return false;
        }

        for (const item of state.skills) {
            if (item.content.match(content) && item.content.length === content.length) {
                toast.error(`Skill ${item.content} all ready exist !`);
                dispatch(pushNotificationAction(`Skill ${item.content} all ready exist.`));
                return false;
            }
        }

        dispatch(addSkillAction(content));
        toast.success(`Skill ${content} added successfully !`);
        dispatch(pushNotificationAction(`Skill ${content} added successfully.`));

        setContent("");
    }

    return (
        <div className={classNames({ "h-60 overflow-y-scroll pr-1": state.skills.length >= 20 })}>
            <form onSubmit={addSkill}>
                <Flex className="w-full gap-2" direction="row" items="center">
                    <Input
                        type="text"
                        placeholder="Enter a skill"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <Button className="w-1/4 px-2 !py-[7px]">
                        <p className="hidden lg:block">Add skill</p>
                        <p className="block lg:hidden">Add</p>
                    </Button>
                </Flex>
            </form>

            {state.skills.length > 0 ? (
                <Grid className="gap-2 mt-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" cols="1">
                    {skills}
                </Grid>
            ) : (
                <div
                    className={classNames("__data_list_empty mt-2", {
                        "rounded-md": state.switchBooleans.uiControl.isRounded,
                    })}
                >
                    No skills to show !
                </div>
            )}
        </div>
    );
};

export default SkillsInfo;
