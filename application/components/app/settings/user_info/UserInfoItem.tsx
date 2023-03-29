import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans, UserInfo } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingsInfo from "@/components/build/SettingsInfo";
import Button from "@/components/build/Button";

const UserInfoItem = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [userInfo, setUserInfo] = useState<UserInfo>({
        designation: "",
        projects: 0,
        earned: 0,
    });

    function editUserInfo(): void | false {
        dispatch({
            type: "changeUserInfo",
            payload: {
                userInfo: {
                    designation: userInfo.designation ? userInfo.designation : "Web Developer",
                    projects: userInfo.projects > 0 ? userInfo.projects : 80,
                    earned: userInfo.earned > 0 ? userInfo.earned : 8500,
                },
            },
        });

        if (!userInfo.designation) {
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
                label="Designation"
                labelHTMLFor="designation"
                type="text"
                stateValue={state.userInfo.designation}
                onChange={(e) => setUserInfo((prevState) => ({ ...prevState, designation: e.target.value }))}
            />

            <SettingsInfo
                label="Projects"
                labelHTMLFor="projects"
                type="number"
                stateValue={state.userInfo.projects}
                onChange={(e) => setUserInfo((prevState) => ({ ...prevState, projects: Number(e.target.value) }))}
            />

            <SettingsInfo
                label="Earned"
                labelHTMLFor="earned"
                type="number"
                stateValue={state.userInfo.earned}
                onChange={(e) => setUserInfo((prevState) => ({ ...prevState, earned: Number(e.target.value) }))}
            />

            <Flex direction="row" items="end" justify="end">
                <Button className="w-16" onClick={editUserInfo}>
                    Save
                </Button>
            </Flex>
        </Flex>
    );
};

export default UserInfoItem;
