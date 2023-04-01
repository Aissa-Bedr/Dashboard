import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import Friend from "../friend/Friend";
import addFriendAction from "@/redux/actions/add_actions/addFriendAction";
import { Friends } from "@/redux/types/data";

const FriendsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [friendInfo, setFriendInfo] = useState<Friends>({
        name: "",
        pictureSrc: "",
        job: "",
    });

    const friendsInfo = state.friends.map((item) => <Friend key={item.id} {...item} />);

    const patterns = {
        pictureSrc: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|jpeg)/g,
    };

    function addFriend(): void | false {
        if (!friendInfo.name || !friendInfo.pictureSrc || !friendInfo.job) {
            state.switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Friend can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        if (!patterns.pictureSrc.test(friendInfo.pictureSrc)) {
            state.switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Invalid Picture Source !`, { position: "top-center", theme: state.theme });
            return false;
        }

        dispatch(addFriendAction(friendInfo));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Friend added successfully !`, { position: "top-center", theme: state.theme });
        setFriendInfo({
            name: "",
            pictureSrc: "",
            job: "",
        });
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Picture Source"
                    value={friendInfo.pictureSrc}
                    onChange={(e) => setFriendInfo((prevState) => ({ ...prevState, pictureSrc: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Friend Name"
                    value={friendInfo.name}
                    onChange={(e) => setFriendInfo((prevState) => ({ ...prevState, name: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Job"
                    value={friendInfo.job}
                    onChange={(e) => setFriendInfo((prevState) => ({ ...prevState, job: e.target.value }))}
                />

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Friends" listLength={friendsInfo.length} />

                    <Button className="px-2 py-1" onClick={addFriend}>
                        Add friend
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.friends.length > 0 ? (
                    <Grid className="gap-4 lg:grid-cols-2 xl:grid-cols-3" cols="1">
                        {friendsInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No friends to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default FriendsInfo;
