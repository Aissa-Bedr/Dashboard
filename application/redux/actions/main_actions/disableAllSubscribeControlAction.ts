import { DISABLE_ALL_SUBSCRIBE_CONTROL } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function disableAllSubscribeControlAction(): AppStateAction {
    return { type: DISABLE_ALL_SUBSCRIBE_CONTROL };
}

export default disableAllSubscribeControlAction;
