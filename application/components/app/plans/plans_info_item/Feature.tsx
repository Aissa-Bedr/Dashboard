import Flex from "@/components/build/Flex";
import React, { FC, useState } from "react";
import { HiOutlineCheck, HiOutlineInformationCircle, HiOutlineX } from "react-icons/hi";
import { FeatureProps } from "../types/main";
import SecondaryLogo from "../../main/SecondaryLogo";

const Feature: FC<FeatureProps> = ({ content, completeContent, isChecked }) => {
    const [isCompleteContentShowed, setIsCompleteContentShowed] = useState(false);

    return (
        <Flex className="py-2 __border_b" direction="row" items="center" justify="between">
            <Flex className="gap-2" direction="row" items="center">
                {isChecked ? (
                    <HiOutlineCheck className="text-green-color" size="1.5rem" />
                ) : (
                    <HiOutlineX className="text-red-color" size="1.5rem" />
                )}

                <SecondaryLogo text={isCompleteContentShowed ? completeContent : content} />
            </Flex>

            <HiOutlineInformationCircle
                className="text-grey-color dark:text-grey-dark-color cursor-pointer"
                size="1.5rem"
                onClick={() => setIsCompleteContentShowed((prevState) => !prevState)}
            />
        </Flex>
    );
};

export default Feature;
