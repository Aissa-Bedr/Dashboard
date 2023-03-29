import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, GeneralInfo, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingsInfo from "@/components/build/SettingsInfo";
import Button from "@/components/build/Button";

const GeneralInfoItem = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({
        firstName: "",
        lastName: "",
    });

    function editGeneralInfo(): void | false {
        dispatch({
            type: "changeGeneralInfo",
            payload: {
                generalInfo: {
                    firstName: generalInfo.firstName ? generalInfo.firstName : "Aissa",
                    lastName: generalInfo.lastName ? generalInfo.lastName : "Bedr",
                },
            },
        });

        if (!generalInfo.firstName && !generalInfo.lastName) {
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
                label="First Name"
                labelHTMLFor="first_name"
                type="text"
                stateValue={state.generalInfo.firstName}
                onChange={(e) => setGeneralInfo((prevState) => ({ ...prevState, firstName: e.target.value }))}
            />

            <SettingsInfo
                label="Last Name"
                labelHTMLFor="last_name"
                type="text"
                stateValue={state.generalInfo.lastName}
                onChange={(e) => setGeneralInfo((prevState) => ({ ...prevState, lastName: e.target.value }))}
            />

            <Flex direction="row" items="end" justify="end">
                <Button className="w-16" onClick={editGeneralInfo}>
                    Save
                </Button>
            </Flex>
        </Flex>
    );
};

export default GeneralInfoItem;
