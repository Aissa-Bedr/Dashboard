import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import EachPost from "./EachPost";
import { Posts } from "@/redux/types/data";
import addPostAction from "@/redux/actions/add_actions/addPostAction";

const PostsInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [postInfo, setPostInfo] = useState<Posts>({
        postOwner: "",
        postTitle: "",
        postDescription: "",
    });

    const postsInfo = state.posts.map((item) => <EachPost key={item.id} {...item} />);

    function addPost(): void | false {
        if (!postInfo.postOwner || !postInfo.postTitle || !postInfo.postDescription) {
            toast.error("Post can't be empty !");
            return false;
        }

        dispatch(addPostAction(postInfo));
        toast.success("Post added successfully !");

        setPostInfo({
            postOwner: "",
            postTitle: "",
            postDescription: "",
        });
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
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

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.posts.length > 0 ? (
                    <Grid className="gap-4 xl:grid-cols-2 2xl:grid-cols-3" cols="1">
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
