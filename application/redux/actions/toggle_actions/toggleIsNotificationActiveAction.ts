import { TOGGLE_IS_NOTIFICATION_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNotificationActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_NOTIFICATION_ACTIVE };
}

export default toggleIsNotificationActiveAction;
