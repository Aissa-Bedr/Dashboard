import { TOGGLE_IS_AUTO_SELECT } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsAutoSelectAction(): AppStateAction {
    return { type: TOGGLE_IS_AUTO_SELECT };
}

export default toggleIsAutoSelectAction;
