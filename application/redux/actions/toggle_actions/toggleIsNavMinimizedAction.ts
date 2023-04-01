import { TOGGLE_IS_NAV_MINIMIZED } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNavMinimizedAction(): AppStateAction {
    return { type: TOGGLE_IS_NAV_MINIMIZED };
}

export default toggleIsNavMinimizedAction;
