import { REMOVE_POST } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removePostAction(id: string): AppStateAction {
    return {
        type: REMOVE_POST,
        payload: { posts: { id } },
    };
}

export default removePostAction;
