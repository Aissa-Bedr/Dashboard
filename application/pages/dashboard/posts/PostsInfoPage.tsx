import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, Files, Posts, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import EachPost from "./EachPost";

const PostsInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [postInfo, setPostInfo] = useState<Posts>({
        postOwner: "",
        postTitle: "",
        postDescription: "",
        isLiked: false,
        isCommentsActive: false,
    });

    const postsInfo = state.posts.map((item) => <EachPost key={item.id} {...item} />);

    function addPost(): void | false {
        if (!postInfo.postOwner || !postInfo.postTitle || !postInfo.postDescription) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Post can't be empty !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        dispatch({ type: "addPost", payload: { posts: postInfo } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Post added successfully !`, {
                position: "top-center",
                theme: state.theme,
            });
        setPostInfo({ postOwner: "", postTitle: "", postDescription: "", isLiked: false, isCommentsActive: false });
    }

    return (
        <>
            <BoxContainer className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="Post owner"
                    value={postInfo.postOwner}
                    onChange={(e) => setPostInfo((prevState) => ({ ...prevState, postOwner: e.target.value }))}
                />
                <Input
                    type="text"
                    placeholder="Post Title"
                    value={postInfo.postTitle}
                    onChange={(e) => setPostInfo((prevState) => ({ ...prevState, postTitle: e.target.value }))}
                />
                <Input
                    type="text"
                    placeholder="Post description"
                    value={postInfo.postDescription}
                    onChange={(e) => setPostInfo((prevState) => ({ ...prevState, postDescription: e.target.value }))}
                />

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Posts" listLength={postsInfo.length} />

                    <Button className="px-2 py-1" onClick={addPost}>
                        Add post
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="gap-4 mt-4" cols="1">
                {state.posts.length > 0 ? (
                    <Grid className="gap-4 lg:grid-cols-2 xl:grid-cols-3" cols="1">
                        {postsInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No posts to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default PostsInfoPage;
