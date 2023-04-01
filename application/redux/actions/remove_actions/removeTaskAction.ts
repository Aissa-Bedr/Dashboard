import { REMOVE_TASK } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeTaskAction(id: string): AppStateAction {
    return {
        type: REMOVE_TASK,
        payload: { tasks: { id } },
    };
}

export default removeTaskAction;
