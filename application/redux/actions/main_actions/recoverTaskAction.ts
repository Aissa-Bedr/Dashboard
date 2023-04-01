import { RECOVER_TASK } from "@/redux/constants/mainTypes";
import { AppStateAction } from "@/redux/types/main";

function recoverTaskAction(id: string): AppStateAction {
    return {
        type: RECOVER_TASK,
        payload: { tasks: { id } },
    };
}

export default recoverTaskAction;
