import { PUSH_NOTIFICATION } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";
import { Notifications } from "@/components/app/friends/types/main";

function pushNotificationAction(content: string): AppStateAction {
    return {
        type: PUSH_NOTIFICATION,
        payload: { notifications: { content } },
    };
}

export default pushNotificationAction;
