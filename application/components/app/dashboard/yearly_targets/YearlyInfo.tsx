import Flex from "@/components/build/Flex";
import React from "react";
import YearlyInfoItem from "./YearlyInfoItem";
import yearlyTargetsList from "../data/yearlyTargetsList";

const YearlyInfo = () => {
    const yearlyTargets = yearlyTargetsList.map((item) => <YearlyInfoItem key={item.id} {...item} />);

    return (
        <>
            <Flex className="w-full gap-4" direction="col">
                {yearlyTargets}
            </Flex>
        </>
    );
};

export default YearlyInfo;
