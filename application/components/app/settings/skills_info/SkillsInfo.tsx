import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import Skill from "./Skill";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import Button from "@/components/build/Button";
import Input from "@/components/build/Input";
import Grid from "@/components/build/Grid";

const SkillsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [content, setContent] = useState("");

    const skills = state.skills.map((skill) => <Skill key={skill.id} {...skill} />);

    function addSkill(): void | false {
        if (!content) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Skill can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        for (const item of state.skills) {
            if (item.content.match(content) && item.content.length === content.length) {
                switchBooleans.websiteControl.isNotificationActive &&
                    toast.error(`Skill ${item.content} all ready exist !`, {
                        position: "top-center",
                        theme: state.theme,
                    });
                return false;
            }
        }

        dispatch({ type: "addSkill", payload: { skills: { content } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Skill ${content} added successfully !`, { position: "top-center", theme: state.theme });
        setContent("");
    }

    return (
        <div className={classNames({ "h-60 overflow-y-scroll pr-1": state.skills.length >= 20 })}>
            <Flex className="w-full gap-2" direction="row" items="center">
                <Input
                    type="text"
                    placeholder="Enter a skill"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Button className="w-1/4 px-2 !py-[7px]" onClick={addSkill}>
                    <p className="hidden lg:block">Add skill</p>
                    <p className="block lg:hidden">Add</p>
                </Button>
            </Flex>

            {state.skills.length > 0 ? (
                <Grid className="gap-2 mt-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" cols="1">
                    {skills}
                </Grid>
            ) : (
                <div className={classNames("__data_list_empty", { "rounded-md": switchBooleans.uiControl.isRounded })}>
                    No skills to show !
                </div>
            )}
        </div>
    );
};

export default SkillsInfo;
