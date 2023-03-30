import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState, AppStateAction, Posts } from "@/redux/types/main";
import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestPostInfo from "./LatestPostInfo";

const LatestPost = () => {
    const posts = useSelector<AppState, Posts[]>((state) => state.posts);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Latest post" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move
                            href="/dashboard/posts"
                            onClick={() =>
                                dispatch({ type: "changeLink", payload: { links: { currentLinkValue: "dashboard" } } })
                            }
                        >
                            Show more
                        </Move>

                        <ListLength listName="Posts" listLength={posts.length} />
                    </Flex>
                </Flex>
            </LogoContainer>

            <ContentWrapper>
                <LatestPostInfo />
            </ContentWrapper>
        </BoxContainer>
    );
};

export default LatestPost;
