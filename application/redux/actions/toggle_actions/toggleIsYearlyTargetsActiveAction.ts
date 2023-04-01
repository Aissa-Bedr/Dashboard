import { TOGGLE_IS_YEARLY_TARGETS_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsYearlyTargetsActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_YEARLY_TARGETS_ACTIVE };
}

export default toggleIsYearlyTargetsActiveAction;
