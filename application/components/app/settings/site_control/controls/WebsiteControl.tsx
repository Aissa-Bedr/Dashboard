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
import Flex from "@/components/build/Flex";

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
                <>
                    <div className="__controls_item">
                        <Flex className="text-center md:text-left" direction="col">
                            <p className="text-lg font-medium text-black capitalize dark:text-white">Website control</p>
                            <p className="text-sm font-semibold capitalize text-grey-color dark:text-grey-dark-color">
                                Control the website default settings
                            </p>
                        </Flex>
                    </div>
                    <p className="text-sm __secondary_logo">Subscribe first to access this feature</p>
                </>
            )}
        </>
    );
};

export default WebsiteControl;
