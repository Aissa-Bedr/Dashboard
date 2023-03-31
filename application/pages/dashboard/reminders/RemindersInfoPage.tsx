import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, Files, Reminders, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import Select from "@/components/build/Select";
import EachReminder from "./EachReminder";
import { Theme } from "@/components/app/dashboard/reminders/types/app";

const RemindersInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [reminderInfo, setReminderInfo] = useState<Reminders>({
        title: "",
        time: "",
        theme: "blue",
    });

    const remindersInfo = state.reminders.map((item) => <EachReminder key={item.id} {...item} />);

    const patterns = {
        finishDate: /\d{1,2}\W\w{1,}\W\d{4}\W\W\W\d{1,2}\d{1,2}\W\w{2}/g,
    };

    function addReminder(): void | false {
        if (!reminderInfo.title || !reminderInfo.time) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Reminder can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        if (!patterns.finishDate.test(reminderInfo.time)) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Invalid information please try again later !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        dispatch({ type: "addReminder", payload: { reminders: reminderInfo } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Reminder added successfully !`, { position: "top-center", theme: state.theme });
        setReminderInfo({ title: "", time: "", theme: "blue" });
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
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

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Reminders" listLength={remindersInfo.length} />

                    <Button className="px-2 py-1" onClick={addReminder}>
                        Add reminder
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.reminders.length > 0 ? (
                    <Grid className="gap-4 lg:grid-cols-2 xl:grid-cols-3" cols="1">
                        {remindersInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No reminders to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default RemindersInfoPage;
