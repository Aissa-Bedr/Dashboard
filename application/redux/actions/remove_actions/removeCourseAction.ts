import { REMOVE_COURSE } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeCourseAction(id: string): AppStateAction {
    return {
        type: REMOVE_COURSE,
        payload: { courses: { id } },
    };
}

export default removeCourseAction;
