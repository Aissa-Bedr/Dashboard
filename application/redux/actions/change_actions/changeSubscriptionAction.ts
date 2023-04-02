import { CHANGE_SUBSCRIPTION } from "@/redux/constants/changeTypes";
import { Subscription } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeSubscriptionAction(subscription: Partial<Subscription>): AppStateAction {
    return {
        type: CHANGE_SUBSCRIPTION,
        payload: { subscription },
    };
}

export default changeSubscriptionAction;
