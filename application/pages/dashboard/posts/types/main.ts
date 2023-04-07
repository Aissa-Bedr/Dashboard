import { Comment } from "@/redux/types/data";
import { FilterKey } from "./app";

export interface EachCommentProps extends Comment {
    postId: string;
}

export interface PostOptions {
    filterKey: FilterKey;
    filterValue: string;
}
