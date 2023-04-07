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
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";
import Select from "@/components/build/Select";
import { PostOptions } from "./types/main";
import { FilterKey } from "./types/app";

const PostsInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [postInfo, setPostInfo] = useState<Posts>({
        postOwner: "",
        postTitle: "",
        postDescription: "",
    });
    const [postOptions, setPostOptions] = useState<PostOptions>({
        filterKey: "postDescription",
        filterValue: "",
    });

    const postsInfo = state.posts
        .filter((post) =>
            postOptions.filterKey === "postDescription"
                ? post.postDescription.includes(postOptions.filterValue)
                : postOptions.filterKey === "liked"
                ? post.isLiked
                : !post.isLiked
        )
        .map((item) => <EachPost key={item.id} {...item} />);

    function addPost(): void | false {
        if (!postInfo.postOwner || !postInfo.postTitle || !postInfo.postDescription) {
            toast.error("Post can't be empty !");
            dispatch(pushNotificationAction("Post can't be empty."));
            return false;
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.posts.length >= 10) {
                toast.error("You cannot add more than 10 posts Projects Subscribe to activate unlimited data.");
                dispatch(
                    pushNotificationAction(
                        "You cannot add more than 10 posts Projects Subscribe to activate unlimited data."
                    )
                );
                return false;
            }
        }

        dispatch(addPostAction(postInfo));
        toast.success("Post added successfully !");
        dispatch(pushNotificationAction("Post added successfully."));

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

            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Select
                    value={postOptions.filterKey}
                    onChange={(e) =>
                        setPostOptions((prevState) => ({ filterKey: e.target.value as FilterKey, filterValue: "" }))
                    }
                >
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="postDescription"
                    >
                        Description
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="liked"
                    >
                        Liked
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="notLiked"
                    >
                        Not Liked
                    </option>
                </Select>

                {postOptions.filterKey === "postDescription" && (
                    <Input
                        type="text"
                        placeholder="Post description"
                        value={postOptions.filterValue}
                        onChange={(e) => setPostOptions((prevState) => ({ ...prevState, filterValue: e.target.value }))}
                    />
                )}
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
