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
import LatestUploadsInfo from "./LatestUploadsInfo";
import { Files } from "@/redux/types/data";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const LatestUploads = () => {
    const files = useSelector<AppState, Files[]>((state) => state.files);
    const dispatch = useDispatch();

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Latest uploads" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move href="/dashboard/files" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                            Show more
                        </Move>
                        <ListLength listName="Files" listLength={files.length} />
                    </Flex>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <LatestUploadsInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestUploads;
