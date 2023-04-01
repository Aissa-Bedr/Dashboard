import { Courses } from "@/redux/types/data";
import { ADD_COURSE } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addCourseAction(courses: Courses): AppStateAction {
    return {
        type: ADD_COURSE,
        payload: { courses },
    };
}

export default addCourseAction;
