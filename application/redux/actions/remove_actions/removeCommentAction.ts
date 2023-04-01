import { REMOVE_COMMENT } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeCommentAction(postId: string, commentId: string): AppStateAction {
    return {
        type: REMOVE_COMMENT,
        payload: { posts: { id: postId }, comments: { id: commentId } },
    };
}

export default removeCommentAction;
