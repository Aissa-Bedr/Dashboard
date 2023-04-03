import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";
import { SwitchBooleans } from "@/redux/types/data";
import {
    TOGGLE_IS_NOTIFICATION_ACTIVE,
    TOGGLE_IS_ZOOM_IN,
    TOGGLE_WEBSITE_CONTROL,
} from "@/redux/constants/toggleTypes";
import SecondaryLogo from "@/components/app/main/SecondaryLogo";
import Subscribe from "@/components/build/Subscribe";

const WebsiteControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            {switchBooleans.subscribeControl.isAccessWebsiteControlEnabled ? (
                <>
                    <SiteControlInfoItem
                        title="Website control"
                        content="Control the website default settings hide/show"
                        isChecked={switchBooleans.websiteControl.isWebsiteControlActive}
                        dispatchType={TOGGLE_WEBSITE_CONTROL}
                    />

                    {switchBooleans.websiteControl.isWebsiteControlActive && (
                        <>
                            <SiteControlInfoItem
                                content="Notification show off/on"
                                isChecked={switchBooleans.websiteControl.isNotificationActive}
                                dispatchType={TOGGLE_IS_NOTIFICATION_ACTIVE}
                            />
                            <SiteControlInfoItem
                                content="Website zoom average out/in"
                                isChecked={switchBooleans.websiteControl.isZoomIn}
                                dispatchType={TOGGLE_IS_ZOOM_IN}
                            />
                        </>
                    )}
                </>
            ) : (
                <Subscribe subscribeType="gold" feature="Website control" />
            )}
        </>
    );
};

export default WebsiteControl;
