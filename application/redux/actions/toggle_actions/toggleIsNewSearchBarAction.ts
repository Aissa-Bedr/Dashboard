import { TOGGLE_IS_NEW_SEARCH_BAR } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsNewSearchBarAction(): AppStateAction {
    return { type: TOGGLE_IS_NEW_SEARCH_BAR };
}

export default toggleIsNewSearchBarAction;
