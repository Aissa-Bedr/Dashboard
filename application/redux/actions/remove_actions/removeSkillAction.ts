import { REMOVE_SKILL } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeSkillAction(id: string): AppStateAction {
    return {
        type: REMOVE_SKILL,
        payload: { skills: { id } },
    };
}

export default removeSkillAction;
