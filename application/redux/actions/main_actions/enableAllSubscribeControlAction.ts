import { ENABLE_ALL_SUBSCRIBE_CONTROL } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function enableAllSubscribeControlAction(): AppStateAction {
    return { type: ENABLE_ALL_SUBSCRIBE_CONTROL };
}

export default enableAllSubscribeControlAction;
