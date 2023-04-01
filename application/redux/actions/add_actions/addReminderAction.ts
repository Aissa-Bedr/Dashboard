import { Reminders } from "@/redux/types/data";
import { ADD_REMINDER } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addReminderAction(reminders: Reminders): AppStateAction {
    return {
        type: ADD_REMINDER,
        payload: { reminders },
    };
}

export default addReminderAction;
