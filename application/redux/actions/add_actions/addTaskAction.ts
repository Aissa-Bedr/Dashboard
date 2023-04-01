import { ADD_TASK } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addTaskAction(content: string): AppStateAction {
    return {
        type: ADD_TASK,
        payload: { tasks: { content } },
    };
}

export default addTaskAction;
