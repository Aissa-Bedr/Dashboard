import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState, Reminders, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import RemindersInfo from "./RemindersInfo";

const Reminders = () => {
    const reminders = useSelector<AppState, Reminders[]>((state) => state.reminders);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Reminders" />

                    <div
                        className={classNames(
                            "text-center uppercase bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                            { "rounded-md": switchBooleans.uiControl.isRounded }
                        )}
                    >
                        Reminders: {reminders.length}
                    </div>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <RemindersInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Reminders;
