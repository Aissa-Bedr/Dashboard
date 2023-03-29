import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState, Reminders } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import RemindersInfo from "./RemindersInfo";

const Reminders = () => {
    const reminders = useSelector<AppState, Reminders[]>((state) => state.reminders);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Reminders" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move href="/dashboard/reminders">Show more</Move>
                        <ListLength listName="Reminders" listLength={reminders.length} />
                    </Flex>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <RemindersInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Reminders;
