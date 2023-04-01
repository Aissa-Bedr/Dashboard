import { CHANGE_QUICK_DRAFT } from "@/redux/constants/changeTypes";
import { QuickDraft } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeQuickDraftAction(quickDraft: QuickDraft): AppStateAction {
    return { type: CHANGE_QUICK_DRAFT, payload: { quickDraft } };
}

export default changeQuickDraftAction;
