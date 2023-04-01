import { REMOVE_BUSINESS_PROJECT } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeBusinessProjectAction(id: string): AppStateAction {
    return {
        type: REMOVE_BUSINESS_PROJECT,
        payload: { businessProjects: { id } },
    };
}

export default removeBusinessProjectAction;
