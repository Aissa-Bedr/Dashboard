import { TOGGLE_IS_NEW_NAV_IN_THE_TOP } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNewNavInTheTopAction(): AppStateAction {
    return { type: TOGGLE_IS_NEW_NAV_IN_THE_TOP };
}

export default toggleIsNewNavInTheTopAction;
