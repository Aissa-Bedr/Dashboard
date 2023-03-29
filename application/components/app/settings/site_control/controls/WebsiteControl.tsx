import { AppState, SwitchBooleans } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";

const WebsiteControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <SiteControlInfoItem
                title="Website control"
                content="Control the website default settings hide/show"
                isChecked={switchBooleans.websiteControl.isWebsiteControlActive}
                dispatchType="toggleWebsiteControl"
            />
            {switchBooleans.websiteControl.isWebsiteControlActive && (
                <>
                    <SiteControlInfoItem
                        content="Notification show off/on"
                        isChecked={switchBooleans.websiteControl.isNotificationActive}
                        dispatchType="toggleIsNotificationActive"
                    />
                    <SiteControlInfoItem
                        content="Website zoom average out/in"
                        isChecked={switchBooleans.websiteControl.isZoomIn}
                        dispatchType="toggleIsZoomIn"
                    />
                </>
            )}
        </>
    );
};

export default WebsiteControl;
