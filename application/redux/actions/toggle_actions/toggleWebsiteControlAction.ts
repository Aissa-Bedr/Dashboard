import { TOGGLE_WEBSITE_CONTROL } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleWebsiteControlAction(): AppStateAction {
    return { type: TOGGLE_WEBSITE_CONTROL };
}

export default toggleWebsiteControlAction;
