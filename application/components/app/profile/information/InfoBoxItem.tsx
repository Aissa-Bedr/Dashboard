import Flex from "@/components/build/Flex";
import React, { FC } from "react";
import SecondaryLogo from "../../main/SecondaryLogo";
import { InfoBoxItemProps } from "./types/main";

const InfoBoxItem: FC<InfoBoxItemProps> = ({ prop, value }) => {
    return (
        <Flex className="gap-1" direction="row" items="center">
            <SecondaryLogo text={prop} />
            <p className="text-sm font-semibold">{value}</p>
        </Flex>
    );
};

export default InfoBoxItem;
