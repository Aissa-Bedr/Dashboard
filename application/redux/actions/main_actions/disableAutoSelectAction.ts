import { DISABLE_AUTO_SELECT } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function disableAutoSelectAction(): AppStateAction {
    return { type: DISABLE_AUTO_SELECT };
}

export default disableAutoSelectAction;
