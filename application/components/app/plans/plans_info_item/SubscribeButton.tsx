import React, { FC } from "react";
import { SubscribeButtonProps, SubscribeType } from "../types/main";
import { logoBackgroundColors } from "./PlanLogo";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import changeSubscriptionAction from "@/redux/actions/change_actions/changeSubscriptionAction";

const SubscribeButton: FC<SubscribeButtonProps> = ({ subscribeType, backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function subscribe(): void | SubscribeType {
        if (subscribeType === "free") return;

        dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType }));
    }

    return (
        <button
            className={classNames("w-fit text-sm font-semibold py-1 px-2", {
                "rounded-md": state.switchBooleans.uiControl.isRounded,
                [logoBackgroundColors[backgroundColor]]: backgroundColor,
                "text-white": state.subscription.isSubscribed,
            })}
            onClick={subscribe}
        >
            {subscribeType === state.subscription.subscribeType ? "Subscribed" : "Subscribe"}
        </button>
    );
};

export default SubscribeButton;
