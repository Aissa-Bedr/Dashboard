import { TOGGLE_IS_NEW_NAV_BAR } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNewNavBarAction(): AppStateAction {
    return { type: TOGGLE_IS_NEW_NAV_BAR };
}

export default toggleIsNewNavBarAction;
