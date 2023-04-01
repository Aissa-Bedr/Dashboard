import { Comment } from "@/redux/types/data";

export interface EachCommentProps extends Comment {
    postId: string;
}
