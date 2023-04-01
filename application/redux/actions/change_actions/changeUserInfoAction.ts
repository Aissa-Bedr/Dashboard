import { CHANGE_USER_INFO } from "@/redux/constants/changeTypes";
import { UserInfo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeUserInfoAction(userInfo: UserInfo): AppStateAction {
    return { type: CHANGE_USER_INFO, payload: { userInfo } };
}

export default changeUserInfoAction;
