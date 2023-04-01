import { TOGGLE_IS_ROUNDED } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsRoundedAction(): AppStateAction {
    return { type: TOGGLE_IS_ROUNDED };
}

export default toggleIsRoundedAction;
