import React, { useState } from "react";
import BoxContainer from "../../main/BoxContainer";
import Flex from "@/components/build/Flex";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { toast } from "react-toastify";
import clearNotificationsAction from "@/redux/actions/main_actions/clearNotificationsAction";
import EachNotification from "./EachNotification";
import Details from "@/components/build/Details";
import linksData from "@/components/helpers/nav/data/linksData";
import Move from "@/components/build/Move";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import classNames from "classnames";

const Notifications = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const notifications = state.notifications.map((notification) => (
        <EachNotification key={notification.id} {...notification} />
    ));

    const links = linksData.map(({ href, link, content }) => {
        return (
            <Move href={`/${href}`} onClick={() => dispatch(changeLinkAction(link))}>
                {content}
            </Move>
        );
    });

    function clearNotifications(): void | false {
        dispatch(clearNotificationsAction());
        toast.success("Notifications cleared successfully !");
    }

    return (
        <>
            <BoxContainer className="col-span-3">
                <Details note="Links">
                    <Flex className="px-4 py-2" direction="col">
                        {links}
                    </Flex>
                </Details>
            </BoxContainer>

            {state.notifications.length >= 1 ? (
                <BoxContainer className="flex flex-col gap-2 col-span-3">
                    <Flex direction="row" items="end" justify="end">
                        {state.notifications.length >= 1 && (
                            <button
                                className={classNames(
                                    "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                                    { "rounded-md": state.switchBooleans.uiControl.isRounded }
                                )}
                                onClick={clearNotifications}
                                type="button"
                            >
                                Clear
                            </button>
                        )}
                    </Flex>

                    <Flex className="w-full gap-2" direction="col">
                        {notifications}
                    </Flex>
                </BoxContainer>
            ) : (
                <BoxContainer className="col-span-3 text-sm font-semibold uppercase">
                    No notifications to show !
                </BoxContainer>
            )}
        </>
    );
};

export default Notifications;
