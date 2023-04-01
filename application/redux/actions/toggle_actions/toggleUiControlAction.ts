import { TOGGLE_UI_CONTROL } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleUiControlAction(): AppStateAction {
    return { type: TOGGLE_UI_CONTROL };
}

export default toggleUiControlAction;
