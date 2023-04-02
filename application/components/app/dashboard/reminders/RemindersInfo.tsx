import Button from "@/components/build/Button";
import Flex from "@/components/build/Flex";
import Grid from "@/components/build/Grid";
import Input from "@/components/build/Input";
import Select from "@/components/build/Select";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemindersInfoItem from "./RemindersInfoItem";
import { Theme } from "./types/app";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Reminders } from "@/redux/types/data";
import addReminderAction from "@/redux/actions/add_actions/addReminderAction";

const RemindersInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [reminderInfo, setReminderInfo] = useState<Reminders>({
        title: "",
        time: "",
        theme: "blue",
    });

    const remindersInfo = state.reminders.map((item) => <RemindersInfoItem key={item.id} {...item} />);

    const patterns = {
        finishDate: /\d{1,2}\W\w{1,}\W\d{4}\W\W\W\d{1,2}\d{1,2}\W\w{2}/g,
    };

    function addReminder(): void | false {
        if (!reminderInfo.title || !reminderInfo.time) {
            toast.error("Reminder can't be empty !");
            return false;
        }

        if (!patterns.finishDate.test(reminderInfo.time)) {
            toast.error("Invalid information !");
            return false;
        }

        dispatch(addReminderAction(reminderInfo));
        toast.success("Reminder added successfully !");
        setReminderInfo({ title: "", time: "", theme: "blue" });
    }

    return (
        <Flex className="gap-2" direction="col">
            <Grid className="gap-2 lg:grid-cols-2" cols="1">
                <Input
                    type="text"
                    placeholder="Enter a title"
                    value={reminderInfo.title}
                    onChange={(e) => setReminderInfo((prevState) => ({ ...prevState, title: e.target.value }))}
                />
                <Input
                    type="text"
                    placeholder="dd/mm/yy - hh:mm am"
                    value={reminderInfo.time}
                    onChange={(e) => setReminderInfo((prevState) => ({ ...prevState, time: e.target.value }))}
                />
                <Select
                    value={reminderInfo.theme}
                    onChange={(e) => setReminderInfo((prevState) => ({ ...prevState, theme: e.target.value as Theme }))}
                >
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="blue"
                    >
                        blue
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="green"
                    >
                        green
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="orange"
                    >
                        orange
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="red"
                    >
                        red
                    </option>
                </Select>
                <Button onClick={addReminder}>Add reminder</Button>
            </Grid>

            <Flex
                className={classNames("gap-2 mt-2", { "h-40 overflow-y-scroll px-1": state.reminders.length >= 4 })}
                direction="col"
            >
                {state.reminders.length >= 1 ? (
                    <>{remindersInfo}</>
                ) : (
                    <div
                        className={classNames("__data_list_empty", {
                            "rounded-md": state.switchBooleans.uiControl.isRounded,
                        })}
                    >
                        No reminders to show !
                    </div>
                )}
            </Flex>
        </Flex>
    );
};

export default RemindersInfo;
