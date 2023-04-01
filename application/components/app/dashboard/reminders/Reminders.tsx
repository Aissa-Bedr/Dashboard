import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import RemindersInfo from "./RemindersInfo";
import { Reminders } from "@/redux/types/data";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const Reminders = () => {
    const reminders = useSelector<AppState, Reminders[]>((state) => state.reminders);
    const dispatch = useDispatch();

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Reminders" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move href="/dashboard/reminders" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                            Show more
                        </Move>
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
