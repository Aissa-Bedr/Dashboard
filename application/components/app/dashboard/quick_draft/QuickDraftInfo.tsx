import Button from "@/components/build/Button";
import Flex from "@/components/build/Flex";
import Input from "@/components/build/Input";
import SettingsInfo from "@/components/build/SettingsInfo";
import { AppState, AppStateAction, QuickDraft, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuickDraftInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [draftInfo, setDraftInfo] = useState<QuickDraft>({
        title: "",
        content: "",
    });

    function editDraftInfo(): void | false {
        dispatch({
            type: "changeQuickDraft",
            payload: {
                quickDraft: {
                    title: draftInfo.title ? draftInfo.title : "Advice",
                    content: draftInfo.content
                        ? draftInfo.content
                        : "If You See Time Speeding Up, Then You Are Wrong Because It Is Constant And It Is At The Same Pace Every Day, But You May See It As Such Due To The Stupidity Of Your Use Of It !",
                },
            },
        });

        if (!draftInfo.title && !draftInfo.content) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.success("applying the default Settings successfully !", {
                    position: "top-center",
                    theme: state.theme,
                });

            return false;
        }

        switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Settings saved successfully !", {
                position: "top-center",
                theme: state.theme,
            });
    }

    return (
        <Flex className="relative gap-2" direction="col">
            <SettingsInfo
                label="Title"
                labelHTMLFor="title"
                type="text"
                stateValue={state.quickDraft.title}
                onChange={(e) => setDraftInfo((prevState) => ({ ...prevState, title: e.target.value }))}
            />

            <Flex className="gap-2" direction="col">
                <Flex direction="row" items="center" justify="between">
                    <label className="text-grey-color dark:text-grey-dark-color" htmlFor="content">
                        Content
                    </label>

                    <p
                        className={classNames(" text-grey-color dark:text-grey-dark-color", {
                            "w-20 truncate":
                                state.quickDraft.content.length >= 10 ||
                                state.quickDraft.content ===
                                    "If You See Time Speeding Up, Then You Are Wrong Because It Is Constant And It Is At The Same Pace Every Day, But You May See It As Such Due To The Stupidity Of Your Use Of It !",
                        })}
                    >
                        {state.quickDraft.content}
                    </p>
                </Flex>
                <textarea
                    className={classNames({
                        __default_input_field: state.components.inputField.type === "default",
                        __primary_input_field: state.components.inputField.type === "primary",
                        __secondary_input_field:
                            state.components.inputField.type !== "default" &&
                            state.components.inputField.type !== "primary",
                        "rounded-md": switchBooleans.uiControl.isRounded,
                    })}
                    id="content"
                    cols={30}
                    rows={10}
                    placeholder="Your Thought"
                    onChange={(e) => setDraftInfo((prevState) => ({ ...prevState, content: e.target.value }))}
                />
            </Flex>

            <Flex direction="row" items="end" justify="end">
                <Button className="w-16" onClick={editDraftInfo}>
                    Save
                </Button>
            </Flex>
        </Flex>
    );
};

export default QuickDraftInfo;
