import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import WelcomeInfoItem from "./WelcomeInfoItem";

const WelcomeInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex className="gap-2 p-5 __border_y lg:flex-row" direction="col" items="center" justify="around">
            <WelcomeInfoItem
                firstSecContent={`${state.generalInfo.firstName} ${state.generalInfo.lastName}`}
                secondSecContent={state.userInfo.designation}
            />
            <WelcomeInfoItem firstSecContent={`${state.userInfo.projects}`} secondSecContent="Projects" />
            <WelcomeInfoItem firstSecContent={`$${state.userInfo.earned}`} secondSecContent="Earned" />
        </Flex>
    );
};

export default WelcomeInfo;
