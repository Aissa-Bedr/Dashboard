import { REMOVE_NOTIFICATION } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeNotificationAction(id: string): AppStateAction {
    return {
        type: REMOVE_NOTIFICATION,
        payload: { notifications: { id } },
    };
}

export default removeNotificationAction;
