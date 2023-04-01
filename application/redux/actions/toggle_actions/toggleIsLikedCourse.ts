import { TOGGLE_IS_LIKED_COURSE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLikedCourseAction(id: string): AppStateAction {
    return { type: TOGGLE_IS_LIKED_COURSE, payload: { courses: { id } } };
}

export default toggleIsLikedCourseAction;
