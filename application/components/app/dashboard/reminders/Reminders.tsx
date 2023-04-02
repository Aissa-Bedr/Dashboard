import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import RemindersInfo from "./RemindersInfo";
import { Reminders } from "@/redux/types/data";

const Reminders = () => {
    const reminders = useSelector<AppState, Reminders[]>((state) => state.reminders);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Reminders" />

                    <ListLength listName="Reminders" listLength={reminders.length} />
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <RemindersInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default Reminders;
