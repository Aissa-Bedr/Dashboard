import { TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLastProjectProgressActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE };
}

export default toggleIsLastProjectProgressActiveAction;
