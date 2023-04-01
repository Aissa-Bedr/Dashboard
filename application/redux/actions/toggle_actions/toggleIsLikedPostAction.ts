import { TOGGLE_IS_LIKED_POST } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLikedPostAction(id: string): AppStateAction {
    return { type: TOGGLE_IS_LIKED_POST, payload: { posts: { id } } };
}

export default toggleIsLikedPostAction;
