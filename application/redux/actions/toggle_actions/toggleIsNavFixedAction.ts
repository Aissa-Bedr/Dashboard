import { TOGGLE_IS_NAV_FIXED } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNavFixedAction(): AppStateAction {
    return { type: TOGGLE_IS_NAV_FIXED };
}

export default toggleIsNavFixedAction;
