import { COMPLETE_TASK } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function removeTaskAction(id: string): AppStateAction {
    return {
        type: COMPLETE_TASK,
        payload: { tasks: { id } },
    };
}

export default removeTaskAction;
