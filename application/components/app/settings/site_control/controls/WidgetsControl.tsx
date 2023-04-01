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

const WidgetsControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
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
    );
};

export default WidgetsControl;
