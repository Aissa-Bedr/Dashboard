import { COMPLETE_TASK } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function completeTaskAction(id: string): AppStateAction {
    return {
        type: COMPLETE_TASK,
        payload: { tasks: { id } },
    };
}

export default completeTaskAction;
