import { ADD_COMMENT } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addCommentAction(id: string, commentDescription: string): AppStateAction {
    return {
        type: ADD_COMMENT,
        payload: { posts: { id }, comments: { commentDescription } },
    };
}

export default addCommentAction;
