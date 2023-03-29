import Flex from "@/components/build/Flex";
import React, { FC } from "react";
import { WelcomeInfoItemProps } from "./types/main";

const WelcomeInfoItem: FC<WelcomeInfoItemProps> = ({ firstSecContent, secondSecContent }) => {
    return (
        <Flex className="gap-2" direction="col" items="center" justify="center">
            <p className="text-lg font-medium text-black capitalize dark:text-white">{firstSecContent}</p>
            <p className="text-sm font-semibold capitalize text-grey-color dark:text-grey-dark-color">
                {secondSecContent}
            </p>
        </Flex>
    );
};

export default WelcomeInfoItem;
