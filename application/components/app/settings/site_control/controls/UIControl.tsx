import { AppState, SwitchBooleans } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import SiteControlInfoItem from "../SiteControlInfoItem";

const UIControl = () => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <>
            <SiteControlInfoItem
                title="UI control"
                content="Control and customize the website user interface hide/show"
                isChecked={switchBooleans.uiControl.isUIControlActive}
                dispatchType="toggleUIControl"
            />
            {switchBooleans.uiControl.isUIControlActive && (
                <>
                    <SiteControlInfoItem
                        content="Appearance light/dark"
                        isChecked={switchBooleans.uiControl.isThemeDark}
                        dispatchType="toggleTheme"
                    />
                    <SiteControlInfoItem
                        content="Navigation bar full/minimized"
                        isChecked={switchBooleans.uiControl.isNavMinimized}
                        dispatchType="toggleIsNavMinimized"
                    />
                    <SiteControlInfoItem
                        content="Edge shape squared/rounded"
                        isChecked={switchBooleans.uiControl.isRounded}
                        dispatchType="toggleIsRounded"
                    />
                    <SiteControlInfoItem
                        content="Search bar hide/show"
                        isChecked={switchBooleans.uiControl.isSearchBarShowed}
                        dispatchType="toggleIsSearchBarShowed"
                    />
                    <SiteControlInfoItem
                        content="Search bar look old/new"
                        isChecked={switchBooleans.uiControl.isNewSearchbar}
                        dispatchType="toggleIsNewSearchbar"
                    />
                    <SiteControlInfoItem
                        content="Old navigation bar constancy moving/fixed"
                        isChecked={switchBooleans.uiControl.isNavFixed}
                        dispatchType="toggleIsNavFixed"
                    />
                    <SiteControlInfoItem
                        content="Navigation bar look old/new"
                        isChecked={switchBooleans.uiControl.isNewNavbar}
                        dispatchType="toggleIsNewNavbar"
                    />
                    <SiteControlInfoItem
                        content="New navigation bar position bottom/top"
                        isChecked={switchBooleans.uiControl.isNewNavInTheTop}
                        dispatchType="toggleIsNewNavInTheTop"
                    />
                </>
            )}
        </>
    );
};

export default UIControl;
