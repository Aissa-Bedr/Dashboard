import { TOGGLE_IS_SEARCH_BAR_SHOWED } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsSearchBarShowedAction(): AppStateAction {
    return { type: TOGGLE_IS_SEARCH_BAR_SHOWED };
}

export default toggleIsSearchBarShowedAction;
