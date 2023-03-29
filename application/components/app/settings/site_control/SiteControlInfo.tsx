import ControlsItemContainer from "@/components/build/ControlsItemContainer";
import Grid from "@/components/build/Grid";
import React from "react";
import UIControl from "./controls/UIControl";
import WebsiteControl from "./controls/WebsiteControl";
import WidgetsControl from "./controls/WidgetsControl";

const SiteControlInfo = () => {
    return (
        <Grid cols="1">
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
