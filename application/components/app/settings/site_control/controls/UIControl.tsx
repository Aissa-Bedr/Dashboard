import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";
import {
    TOGGLE_IS_NAV_FIXED,
    TOGGLE_IS_NAV_MINIMIZED,
    TOGGLE_IS_NEW_NAV_BAR,
    TOGGLE_IS_NEW_NAV_IN_THE_TOP,
    TOGGLE_IS_NEW_SEARCH_BAR,
    TOGGLE_IS_ROUNDED,
    TOGGLE_IS_SEARCH_BAR_SHOWED,
    TOGGLE_THEME,
    TOGGLE_UI_CONTROL,
} from "@/redux/constants/toggleTypes";
import { SwitchBooleans } from "@/redux/types/data";

const UIControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <SiteControlInfoItem
                title="UI control"
                content="Control and customize the website user interface hide/show"
                isChecked={switchBooleans.uiControl.isUIControlActive}
                dispatchType={TOGGLE_UI_CONTROL}
            />
            {switchBooleans.uiControl.isUIControlActive && (
                <>
                    <SiteControlInfoItem
                        content="Appearance light/dark"
                        isChecked={switchBooleans.uiControl.isThemeDark}
                        dispatchType={TOGGLE_THEME}
                    />
                    <SiteControlInfoItem
                        content="Navigation bar full/minimized"
                        isChecked={switchBooleans.uiControl.isNavMinimized}
                        dispatchType={TOGGLE_IS_NAV_MINIMIZED}
                    />
                    <SiteControlInfoItem
                        content="Edge shape squared/rounded"
                        isChecked={switchBooleans.uiControl.isRounded}
                        dispatchType={TOGGLE_IS_ROUNDED}
                    />
                    <SiteControlInfoItem
                        content="Search bar hide/show"
                        isChecked={switchBooleans.uiControl.isSearchBarShowed}
                        dispatchType={TOGGLE_IS_SEARCH_BAR_SHOWED}
                    />
                    <SiteControlInfoItem
                        content="Search bar look old/new"
                        isChecked={switchBooleans.uiControl.isNewSearchbar}
                        dispatchType={TOGGLE_IS_NEW_SEARCH_BAR}
                    />
                    <SiteControlInfoItem
                        content="Old navigation bar constancy moving/fixed"
                        isChecked={switchBooleans.uiControl.isNavFixed}
                        dispatchType={TOGGLE_IS_NAV_FIXED}
                    />
                    <SiteControlInfoItem
                        content="Navigation bar look old/new"
                        isChecked={switchBooleans.uiControl.isNewNavbar}
                        dispatchType={TOGGLE_IS_NEW_NAV_BAR}
                    />
                    <SiteControlInfoItem
                        content="New navigation bar position bottom/top"
                        isChecked={switchBooleans.uiControl.isNewNavInTheTop}
                        dispatchType={TOGGLE_IS_NEW_NAV_IN_THE_TOP}
                    />
                </>
            )}
        </>
    );
};

export default UIControl;
