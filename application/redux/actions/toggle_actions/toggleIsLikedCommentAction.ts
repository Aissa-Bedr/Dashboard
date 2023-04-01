import { TOGGLE_IS_LIKED_COMMENT } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsLikedCommentAction(postId: string, commentId: string): AppStateAction {
    return { type: TOGGLE_IS_LIKED_COMMENT, payload: { posts: { id: postId }, comments: { id: commentId } } };
}

export default toggleIsLikedCommentAction;
