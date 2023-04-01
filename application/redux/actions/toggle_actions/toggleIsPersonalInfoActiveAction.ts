import { TOGGLE_IS_PERSONAL_INFO_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsPersonalInfoActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_PERSONAL_INFO_ACTIVE };
}

export default toggleIsPersonalInfoActiveAction;
