import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, ProfileInfo, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingsInfo from "@/components/build/SettingsInfo";
import Button from "@/components/build/Button";
import Select from "@/components/build/Select";

const ProfileControlItem = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
        email: "",
        phone: "" as any,
        gender: "male",
        country: "",
        birthDay: "",
        programmingLanguage: "",
        experience: "" as any,
    });

    const patters = {
        email: /\w+@\w{2,8}\W\w{2,8}/g,
        phone: /\d{3,15}/g,
        birthDay: /\d{1,2}\W\d{1,2}\W\d{4}/g,
    };

    function editProfileInfo(): void | false {
        dispatch({
            type: "changeProfileInfo",
            payload: {
                profileInfo: {
                    email: patters.email.test(profileInfo.email) ? profileInfo.email : "slayaissabedr@gmail.com",
                    phone: patters.phone.test(`${profileInfo.phone}`) ? profileInfo.phone : 213552328332,
                    gender: profileInfo.gender,
                    country: profileInfo.country ? profileInfo.country : "Algeria",
                    birthDay: patters.birthDay.test(profileInfo.birthDay) ? profileInfo.birthDay : "20/10/2005",
                    programmingLanguage: profileInfo.programmingLanguage
                        ? profileInfo.programmingLanguage
                        : "TypeScript",
                    experience: profileInfo.experience >= 0 ? profileInfo.experience : 1,
                },
            },
        });

        if (
            !patters.email.test(profileInfo.email) ||
            !patters.phone.test(`${profileInfo.phone}`) ||
            !patters.birthDay.test(profileInfo.birthDay) ||
            !profileInfo.country ||
            !profileInfo.programmingLanguage ||
            profileInfo.experience < 0
        ) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.success("applying the default Settings successfully !", {
                    position: "top-center",
                    theme: state.theme,
                });

            return false;
        }

        switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Settings saved successfully !", {
                position: "top-center",
                theme: state.theme,
            });
    }

    return (
        <Flex className="gap-2" direction="col">
            <SettingsInfo
                label="Email"
                labelHTMLFor="email"
                type="text"
                stateValue={state.profileInfo.email}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, email: e.target.value }))}
            />

            <SettingsInfo
                label="Phone"
                labelHTMLFor="phone"
                type="number"
                stateValue={state.profileInfo.phone}
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
                stateValue={state.profileInfo.country}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, country: e.target.value }))}
            />

            <SettingsInfo
                label="BirthDay"
                labelHTMLFor="birthDay"
                type="text"
                stateValue={state.profileInfo.birthDay}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, birthDay: e.target.value }))}
            />

            <SettingsInfo
                label="Programming Language"
                labelHTMLFor="programmingLanguage"
                type="text"
                stateValue={state.profileInfo.programmingLanguage}
                onChange={(e) => setProfileInfo((prevState) => ({ ...prevState, programmingLanguage: e.target.value }))}
            />

            <SettingsInfo
                label="Experience"
                labelHTMLFor="experience"
                type="number"
                stateValue={state.profileInfo.experience}
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
