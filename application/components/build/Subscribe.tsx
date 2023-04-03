import React, { FC } from "react";
import Details from "./Details";
import Move from "./Move";
import { useDispatch } from "react-redux";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import Flex from "./Flex";
import { SubscribeProps } from "./types/main";

const Subscribe: FC<SubscribeProps> = ({ subscribeType, feature }) => {
    const dispatch = useDispatch();

    return (
        <Flex className="gap-2" direction="col">
            <p className="text-sm __secondary_logo">Subscribe first to access this feature</p>

            <Details note="Learn more">
                <Flex className="gap-2 px-4 py-2" direction="col">
                    <p className="text-sm __secondary_logo">
                        You need to get the subscribe {subscribeType} type or higher to access the {feature} feature
                    </p>

                    <Move href="/plans" onClick={() => dispatch(changeLinkAction("plans"))}>
                        Plans
                    </Move>
                </Flex>
            </Details>
        </Flex>
    );
};

export default Subscribe;
