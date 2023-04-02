import React, { FC } from "react";
import PlanLogo from "./PlanLogo";
import { PlansInfoItemProps } from "../types/main";
import Flex from "@/components/build/Flex";
import Feature from "./Feature";
import SubscribeButton from "./SubscribeButton";

const PlansInfoItem: FC<PlansInfoItemProps> = ({ subscribeType, price, logoBackgroundColor, features }) => {
    const featuresInfo = features.map((feature) => <Feature key={feature.id} {...feature} />);

    return (
        <Flex className="gap-4" direction="col">
            <PlanLogo subscribeType={subscribeType} price={price} logoBackgroundColor={logoBackgroundColor} />

            <Flex className="gap-2" direction="col">
                {featuresInfo}
            </Flex>

            <SubscribeButton backgroundColor={logoBackgroundColor} subscribeType={subscribeType} />
        </Flex>
    );
};

export default PlansInfoItem;
