import { Posts } from "@/redux/types/data";
import { ADD_POST } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addPostAction(posts: Posts): AppStateAction {
    return {
        type: ADD_POST,
        payload: { posts },
    };
}

export default addPostAction;
