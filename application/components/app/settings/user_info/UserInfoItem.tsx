import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import SettingsInfo from "@/components/build/SettingsInfo";
import Button from "@/components/build/Button";
import changeUserInfoAction from "@/redux/actions/change_actions/changeUserInfoAction";
import { UserInfo } from "@/redux/types/data";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const UserInfoItem = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState<UserInfo>({
        designation: "",
        projects: 0,
        earned: 0,
    });

    function editUserInfo(): void | false {
        dispatch(changeUserInfoAction(userInfo));

        if (!userInfo.designation) {
            toast.success("applying the default Settings successfully !");
            dispatch(pushNotificationAction("applying the default Settings successfully."));
            return false;
        }

        toast.success("Settings saved successfully !");
        dispatch(pushNotificationAction("Settings saved successfully."));
    }

    return (
        <Flex className="gap-2" direction="col">
            <SettingsInfo
                label="Designation"
                labelHTMLFor="designation"
                type="text"
                stateValue={state.information.userInfo.designation}
                onChange={(e) => setUserInfo((prevState) => ({ ...prevState, designation: e.target.value }))}
            />

            <SettingsInfo
                label="Projects"
                labelHTMLFor="projects"
                type="number"
                stateValue={state.information.userInfo.projects}
                onChange={(e) => setUserInfo((prevState) => ({ ...prevState, projects: Number(e.target.value) }))}
            />

            <SettingsInfo
                label="Earned"
                labelHTMLFor="earned"
                type="number"
                stateValue={state.information.userInfo.earned}
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
