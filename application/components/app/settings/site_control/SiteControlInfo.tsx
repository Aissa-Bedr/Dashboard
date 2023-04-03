import ControlsItemContainer from "@/components/build/ControlsItemContainer";
import Grid from "@/components/build/Grid";
import React from "react";
import UIControl from "./controls/UIControl";
import WebsiteControl from "./controls/WebsiteControl";
import WidgetsControl from "./controls/WidgetsControl";
import Details from "@/components/build/Details";
import Flex from "@/components/build/Flex";

const SiteControlInfo = () => {
    return (
        <Grid cols="1">
            <Details className="mb-4" note="Important note">
                <Flex className="gap-2 p-2" direction="col">
                    <p className="text-sm font-semibold">
                        The auto-select will applyed only in the current color theme and will effect the appearance
                        control themes and components shapes control
                    </p>

                    <p className="text-sm font-semibold">
                        When auto-select is enabled, you will not be able to edit anything that has been changed
                        automatically
                    </p>
                </Flex>
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
