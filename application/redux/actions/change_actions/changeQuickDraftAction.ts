import { CHANGE_QUICK_DRAFT } from "@/redux/constants/changeTypes";
import { QuickDraft } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeQuickDraftAction(quickDraft: QuickDraft): AppStateAction {
    return {
        type: CHANGE_QUICK_DRAFT,
        payload: {
            quickDraft: {
                title: quickDraft.title ? quickDraft.title : "Advice",
                content: quickDraft.content
                    ? quickDraft.content
                    : "If You See Time Speeding Up, Then You Are Wrong Because It Is Constant And It Is At The Same Pace Every Day, But You May See It As Such Due To The Stupidity Of Your Use Of It !",
            },
        },
    };
}

export default changeQuickDraftAction;
