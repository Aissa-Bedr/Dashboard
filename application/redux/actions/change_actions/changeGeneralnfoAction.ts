import { CHANGE_GENERAL_INFO } from "@/redux/constants/changeTypes";
import { GeneralInfo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeGeneralInfoAction(generalInfo: GeneralInfo): AppStateAction {
    return {
        type: CHANGE_GENERAL_INFO,
        payload: {
            generalInfo: {
                firstName: generalInfo.firstName ? generalInfo.firstName : "Aissa",
                lastName: generalInfo.lastName ? generalInfo.lastName : "Bedr",
            },
        },
    };
}

export default changeGeneralInfoAction;
