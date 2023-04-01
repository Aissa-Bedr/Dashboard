import { REMOVE_PROJECT } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeProjectAction(id: string): AppStateAction {
    return {
        type: REMOVE_PROJECT,
        payload: { projects: { id } },
    };
}

export default removeProjectAction;
