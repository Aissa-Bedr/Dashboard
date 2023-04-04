import { profileInfoPatters } from "@/components/app/profile/profile_control/ProfileControlItem";
import { CHANGE_PROFILE_INFO } from "@/redux/constants/changeTypes";
import { ProfileInfo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeProfileInfoAction(profileInfo: ProfileInfo): AppStateAction {
    return {
        type: CHANGE_PROFILE_INFO,
        payload: {
            profileInfo: {
                email: profileInfoPatters.email.test(profileInfo.email) ? profileInfo.email : "slayaissabedr@gmail.com",
                phone: profileInfoPatters.phone.test(`${profileInfo.phone}`) ? profileInfo.phone : 213552328332,
                gender: profileInfo.gender,
                paymentMethod: profileInfo.paymentMethod,
                country: profileInfo.country ? profileInfo.country : "Algeria",
                birthDay: profileInfoPatters.birthDay.test(profileInfo.birthDay) ? profileInfo.birthDay : "20/10/2005",
                programmingLanguage: profileInfo.programmingLanguage ? profileInfo.programmingLanguage : "TypeScript",
                experience: profileInfo.experience && profileInfo.experience >= 1 ? profileInfo.experience : 1,
            },
        },
    };
}

export default changeProfileInfoAction;
