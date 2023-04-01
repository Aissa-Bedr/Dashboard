import { CHANGE_USER_INFO } from "@/redux/constants/changeTypes";
import { UserInfo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeUserInfoAction(userInfo: UserInfo): AppStateAction {
    return {
        type: CHANGE_USER_INFO,
        payload: {
            userInfo: {
                designation: userInfo.designation ? userInfo.designation : "Web Developer",
                projects: userInfo.projects > 0 ? userInfo.projects : 80,
                earned: userInfo.earned > 0 ? userInfo.earned : 8500,
            },
        },
    };
}

export default changeUserInfoAction;
