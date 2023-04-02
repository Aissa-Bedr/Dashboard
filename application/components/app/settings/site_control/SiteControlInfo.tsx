import ControlsItemContainer from "@/components/build/ControlsItemContainer";
import Grid from "@/components/build/Grid";
import React from "react";
import UIControl from "./controls/UIControl";
import WebsiteControl from "./controls/WebsiteControl";
import WidgetsControl from "./controls/WidgetsControl";
import Details from "@/components/build/Details";

const SiteControlInfo = () => {
    return (
        <Grid cols="1">
            <Details className="mb-4 space-y-2" note="Important note">
                <p>
                    The auto-select will applyed only in the current color theme and will effect the appearance control
                    themes and components shapes control
                </p>

                <p>
                    When auto-select is enabled, you will not be able to edit anything that has been changed
                    automatically
                </p>
            </Details>

            <ControlsItemContainer dontIncludePadTop>
                <UIControl />
            </ControlsItemContainer>

            <ControlsItemContainer>
                <WebsiteControl />
            </ControlsItemContainer>

            <ControlsItemContainer dontIncludeBorBottom>
                <WidgetsControl />
            </ControlsItemContainer>
        </Grid>
    );
};

export default SiteControlInfo;
