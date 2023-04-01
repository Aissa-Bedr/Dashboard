import { ADD_SKILL } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addSkillAction(content: string): AppStateAction {
    return {
        type: ADD_SKILL,
        payload: { skills: { content } },
    };
}

export default addSkillAction;
