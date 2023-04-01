import { REMOVE_REMINDER } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeReminderAction(id: string): AppStateAction {
    return {
        type: REMOVE_REMINDER,
        payload: { reminders: { id } },
    };
}

export default removeReminderAction;
