import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";
import { SwitchBooleans } from "@/redux/types/data";
import {
    TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE,
    TOGGLE_IS_LATEST_NEWS_ACTIVE,
    TOGGLE_IS_QUICK_DRAFT_ACTIVE,
    TOGGLE_IS_TICKETS_STATISTICS_ACTIVE,
    TOGGLE_IS_YEARLY_TARGETS_ACTIVE,
    TOGGLE_WIDGETS_CONTROL,
} from "@/redux/constants/toggleTypes";
import SecondaryLogo from "@/components/app/main/SecondaryLogo";
import Subscribe from "@/components/build/Subscribe";
import Flex from "@/components/build/Flex";

const WidgetsControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            {switchBooleans.subscribeControl.isAccessWebsiteControlEnabled ? (
                <>
                    <SiteControlInfoItem
                        title="Widgets control"
                        content="Control the website widgets items show/hide"
                        isChecked={switchBooleans.widgetsControl.isWidgetsControlActive}
                        dispatchType={TOGGLE_WIDGETS_CONTROL}
                    />

                    {switchBooleans.widgetsControl.isWidgetsControlActive && (
                        <>
                            <SiteControlInfoItem
                                content="Quick draft"
                                isChecked={switchBooleans.widgetsControl.isQuickDraftActive}
                                dispatchType={TOGGLE_IS_QUICK_DRAFT_ACTIVE}
                            />
                            <SiteControlInfoItem
                                content="Yearly targets"
                                isChecked={switchBooleans.widgetsControl.isYearlyTargetsActive}
                                dispatchType={TOGGLE_IS_YEARLY_TARGETS_ACTIVE}
                            />
                            <SiteControlInfoItem
                                content="Tickets statistics"
                                isChecked={switchBooleans.widgetsControl.isTicketsStatisticsActive}
                                dispatchType={TOGGLE_IS_TICKETS_STATISTICS_ACTIVE}
                            />
                            <SiteControlInfoItem
                                content="Latest news"
                                isChecked={switchBooleans.widgetsControl.isLatestNewsActive}
                                dispatchType={TOGGLE_IS_LATEST_NEWS_ACTIVE}
                            />
                            <SiteControlInfoItem
                                content="Last project progress"
                                isChecked={switchBooleans.widgetsControl.isLastProjectProgressActive}
                                dispatchType={TOGGLE_IS_LAST_PROJECT_PROGRESS_ACTIVE}
                            />
                        </>
                    )}
                </>
            ) : (
                <>
                    <div className="__controls_item">
                        <Flex className="text-center md:text-left" direction="col">
                            <p className="text-lg font-medium text-black capitalize dark:text-white">Widgets control</p>
                            <p className="text-sm font-semibold capitalize text-grey-color dark:text-grey-dark-color">
                                Control the website default settings
                            </p>
                        </Flex>
                    </div>
                    <Subscribe subscribeType="gold" feature="Widgets control" />
                </>
            )}
        </>
    );
};

export default WidgetsControl;
