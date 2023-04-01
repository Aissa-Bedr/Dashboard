import { BusinessProjects } from "@/redux/types/data";
import { ADD_BUSINESS_PROJECT } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addBusinessProjectAction(businessProjects: BusinessProjects): AppStateAction {
    return {
        type: ADD_BUSINESS_PROJECT,
        payload: { businessProjects },
    };
}

export default addBusinessProjectAction;
