import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import React from "react";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import TopSearchItemsInfo from "./TopSearchItemsInfo";

const TopSearchItems = () => {
    return (
        <BoxContainer>
            <LogoContainer>
                <PrimaryLogo text="Top search items" />

                <Flex className="w-full" direction="row" items="center" justify="between">
                    <SecondaryLogo text="Keyword" />
                    <SecondaryLogo text="Search count" />
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <TopSearchItemsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default TopSearchItems;
