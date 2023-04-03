import ControlsItemContainer from "@/components/build/ControlsItemContainer";
import Grid from "@/components/build/Grid";
import React from "react";
import UIControl from "./controls/UIControl";
import WebsiteControl from "./controls/WebsiteControl";
import WidgetsControl from "./controls/WidgetsControl";
import Details from "@/components/build/Details";
import Flex from "@/components/build/Flex";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";

const SiteControlInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Grid cols="1">
            {state.subscription.subscribeType === "super" ||
                (state.subscription.subscribeType === "max" && (
                    <Details className="mb-4" note="Important note">
                        <Flex className="gap-2 p-2" direction="col">
                            <p className="text-sm __secondary_logo">
                                The auto-select will be apply only in the current color theme and will effect the
                                appearance control themes and components shapes control
                            </p>

                            <p className="text-sm __secondary_logo">
                                When auto-select is enabled, you will not be able to edit anything that has been changed
                                automatically
                            </p>

                            <p className="text-sm __secondary_logo">
                                When auto-select is enabled in light theme, when you change the theme to dark it will
                                automatically disabled and the opposite is true
                            </p>
                        </Flex>
                    </Details>
                ))}

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
