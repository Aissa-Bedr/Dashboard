import { Friends } from "@/redux/types/data";
import { ADD_FRIEND } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function addFriendAction(friends: Friends): AppStateAction {
    return {
        type: ADD_FRIEND,
        payload: { friends },
    };
}

export default addFriendAction;
