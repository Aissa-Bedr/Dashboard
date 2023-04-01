import { TOGGLE_IS_QUICK_DRAFT_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsQuickDraftActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_QUICK_DRAFT_ACTIVE };
}

export default toggleIsQuickDraftActiveAction;
