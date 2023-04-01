import { Projects } from "@/redux/types/data";
import { ADD_PROJECT } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addProjectAction(projects: Projects): AppStateAction {
    return {
        type: ADD_PROJECT,
        payload: { projects },
    };
}

export default addProjectAction;
