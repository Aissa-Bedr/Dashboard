import { TOGGLE_IS_JOB_INFO_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsJobInfoActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_JOB_INFO_ACTIVE };
}

export default toggleIsJobInfoActiveAction;
