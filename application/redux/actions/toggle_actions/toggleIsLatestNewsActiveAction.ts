import { TOGGLE_IS_LATEST_NEWS_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLatestNewsActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_LATEST_NEWS_ACTIVE };
}

export default toggleIsLatestNewsActiveAction;
