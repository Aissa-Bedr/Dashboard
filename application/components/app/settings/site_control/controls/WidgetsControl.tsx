import { AppState, SwitchBooleans } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";

const WidgetsControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <SiteControlInfoItem
                title="Widgets control"
                content="Control the website widgets items show/hide"
                isChecked={switchBooleans.widgetsControl.isWidgetsControlActive}
                dispatchType="toggleWidgetsControl"
            />

            {switchBooleans.widgetsControl.isWidgetsControlActive && (
                <>
                    <SiteControlInfoItem
                        content="Quick draft"
                        isChecked={switchBooleans.widgetsControl.isQuickDraftActive}
                        dispatchType="toggleIsQuickDraftActive"
                    />
                    <SiteControlInfoItem
                        content="Yearly targets"
                        isChecked={switchBooleans.widgetsControl.isYearlyTargetsActive}
                        dispatchType="toggleIsYearlyTargetsActive"
                    />
                    <SiteControlInfoItem
                        content="Tickets statistics"
                        isChecked={switchBooleans.widgetsControl.isTicketsStatisticsActive}
                        dispatchType="toggleIsTicketsStatisticsActive"
                    />
                    <SiteControlInfoItem
                        content="Latest news"
                        isChecked={switchBooleans.widgetsControl.isLatestNewsActive}
                        dispatchType="toggleIsLatestNewsActive"
                    />
                    <SiteControlInfoItem
                        content="Latest uploads"
                        isChecked={switchBooleans.widgetsControl.isLatestUploadsActive}
                        dispatchType="toggleIsLatestUploadsActive"
                    />
                    <SiteControlInfoItem
                        content="Last project progress"
                        isChecked={switchBooleans.widgetsControl.isLastProjectProgressActive}
                        dispatchType="toggleIsLastProjectProgressActive"
                    />
                </>
            )}
        </>
    );
};

export default WidgetsControl;
