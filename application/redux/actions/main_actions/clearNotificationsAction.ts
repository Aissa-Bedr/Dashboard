import { CLEAR_NOTIFICATIONS } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function clearNotificationsAction(): AppStateAction {
    return { type: CLEAR_NOTIFICATIONS };
}

export default clearNotificationsAction;
