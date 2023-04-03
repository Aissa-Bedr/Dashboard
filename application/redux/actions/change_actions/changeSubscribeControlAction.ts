import { CHANGE_SUBSCRIBE_CONTROL } from "@/redux/constants/changeTypes";
import { SubscribeControl } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeSubscribeControlAction(subscribeControl: SubscribeControl): AppStateAction {
    return {
        type: CHANGE_SUBSCRIBE_CONTROL,
        payload: { subscribeControl },
    };
}

export default changeSubscribeControlAction;
