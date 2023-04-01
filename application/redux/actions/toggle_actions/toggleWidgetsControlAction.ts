import { TOGGLE_WIDGETS_CONTROL } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleWidgetsControlAction(): AppStateAction {
    return { type: TOGGLE_WIDGETS_CONTROL };
}

export default toggleWidgetsControlAction;
