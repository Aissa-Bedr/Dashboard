import { TOGGLE_IS_GENERAL_INFO_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsGeneralInfoActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_GENERAL_INFO_ACTIVE };
}

export default toggleIsGeneralInfoActiveAction;
