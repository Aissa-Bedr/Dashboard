import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestUploadsInfo from "./LatestUploadsInfo";
import { Files } from "@/redux/types/data";

const LatestUploads = () => {
    const files = useSelector<AppState, Files[]>((state) => state.files);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Latest uploads" />

                    <ListLength listName="Files" listLength={files.length} />
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <LatestUploadsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestUploads;
