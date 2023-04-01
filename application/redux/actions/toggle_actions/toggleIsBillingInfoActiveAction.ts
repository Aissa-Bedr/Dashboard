import { TOGGLE_IS_BILLING_INFO_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsBillingInfoActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_BILLING_INFO_ACTIVE };
}

export default toggleIsBillingInfoActiveAction;
