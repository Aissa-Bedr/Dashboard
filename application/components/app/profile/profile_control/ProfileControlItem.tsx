import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SettingsInfo from "@/components/build/SettingsInfo";
import Button from "@/components/build/Button";
import Select from "@/components/build/Select";
import { ProfileInfo } from "@/redux/types/data";
import changeProfileInfoAction from "@/redux/actions/change_actions/changeProfileInfoAction";

export const profileInfoPatters = {
    email: /\w+@\w{2,8}\W\w{2,8}/g,
    phone: /\d{3,15}/g,
    birthDay: /\d{1,2}\W\d{1,2}\W\d{4}/g,
};

const ProfileControlItem = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
        email: "",
        phone: "" as any,
        gender: "male",
        country: "",
        birthDay: "",
        programmingLanguage: "",
        experience: "" as any,
    });

    function editProfileInfo(): void | false {
        dispatch(changeProfileInfoAction(profileInfo));

        if (
            !profileInfoPatters.email.test(profileInfo.email) ||
            !profileInfoPatters.phone.test(`${profileInfo.phone}`) ||
            !profileInfoPatters.birthDay.test(profileInfo.birthDay) ||
            !profileInfo.country ||
            !profileInfo.programmingLanguage ||
            profileInfo.experience < 0
        ) {
            toast.success("applying the default Settings successfully !");
            return false;
        }

        toast.success("Settings saved successfully !");
    }

    return (
        <Flex className="gap-2" direction="col">
            <SettingsInfo
                label="Email"
                labelHTMLFor="email"
                type="text"
                stateValue={state.information.profileInfo.email}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, email: e.target.value }))}
            />

            <SettingsInfo
                label="Phone"
                labelHTMLFor="phone"
                type="number"
                stateValue={state.information.profileInfo.phone}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, phone: +e.target.value }))}
            />

            <Select
                value={profileInfo.gender}
                onChange={(e) =>
                    setProfileInfo((prevState) => ({ ...prevState, gender: e.target.value as "male" | "female" }))
                }
            >
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="male"
                >
                    Male
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="female"
                >
                    Female
                </option>
            </Select>

            <SettingsInfo
                label="Country"
                labelHTMLFor="country"
                type="text"
                stateValue={state.information.profileInfo.country}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, country: e.target.value }))}
            />

            <SettingsInfo
                label="Date Of Birth"
                labelHTMLFor="dateOfBirth"
                type="text"
                stateValue={state.information.profileInfo.birthDay}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, birthDay: e.target.value }))}
            />

            <SettingsInfo
                label="Programming Language"
                labelHTMLFor="programmingLanguage"
                type="text"
                stateValue={state.information.profileInfo.programmingLanguage}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, programmingLanguage: e.target.value }))}
            />

            <SettingsInfo
                label="Experience"
                labelHTMLFor="experience"
                type="number"
                stateValue={state.information.profileInfo.experience}
                onChange={(e) =>
                    setProfileInfo((prevState) => ({ ...prevState, experience: parseInt(e.target.value) }))
                }
            />

            <Flex direction="row" items="end" justify="end">
                <Button className="w-16" onClick={editProfileInfo}>
                    Save
                </Button>
            </Flex>
        </Flex>
    );
};

export default ProfileControlItem;
