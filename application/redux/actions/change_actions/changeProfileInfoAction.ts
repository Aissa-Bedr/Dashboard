import { CHANGE_PROFILE_INFO } from "@/redux/constants/changeTypes";
import { ProfileInfo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeProfileInfoAction(profileInfo: ProfileInfo): AppStateAction {
    return { type: CHANGE_PROFILE_INFO, payload: { profileInfo } };
}

export default changeProfileInfoAction;
