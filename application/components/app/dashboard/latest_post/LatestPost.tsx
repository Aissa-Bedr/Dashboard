import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import ListLength from "@/components/build/ListLength";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState, Posts } from "@/redux/types/main";
import React from "react";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import LatestPostInfo from "./LatestPostInfo";

const LatestPost = () => {
    const posts = useSelector<AppState, Posts[]>((state) => state.posts);

    return (
        <BoxContainer>
            <LogoContainer>
                <Flex className="w-full" direction="row" items="center" justify="between">
                    <PrimaryLogo text="Latest post" />

                    <Flex className="gap-2" direction="row" items="center">
                        <Move href="/dashboard/posts">Show more</Move>
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
