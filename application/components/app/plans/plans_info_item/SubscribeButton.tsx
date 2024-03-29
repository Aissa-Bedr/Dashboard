import React, { FC } from "react";
import { SubscribeButtonProps, SubscribeType } from "../types/main";
import { logoBackgroundColors } from "./PlanLogo";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import changeSubscriptionAction from "@/redux/actions/change_actions/changeSubscriptionAction";
import changeSubscribeControlAction from "@/redux/actions/change_actions/changeSubscribeControlAction";
import disableAllSubscribeControlAction from "@/redux/actions/main_actions/disableAllSubscribeControlAction";
import enableAllSubscribeControlAction from "@/redux/actions/main_actions/enableAllSubscribeControlAction";
import disableAutoSelectAction from "@/redux/actions/main_actions/disableAutoSelectAction";
import { toast } from "react-toastify";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const SubscribeButton: FC<SubscribeButtonProps> = ({ subscribeType, backgroundColor }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function subscribe(): void | SubscribeType {
        switch (subscribeType) {
            case "free":
                dispatch(changeSubscriptionAction({ isSubscribed: false, subscribeType: "free" }));
                dispatch(disableAllSubscribeControlAction());
                dispatch(disableAutoSelectAction());
                break;

            case "silver":
                dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType: "silver" }));
                dispatch(
                    changeSubscribeControlAction({
                        isChangeGeneralAndUserInfoEnabled: true,
                        isAccessWebsiteControlEnabled: false,
                        isAccessWidgetsControlEnabled: false,
                        isChangeDarkAppearanceColorEnabled: false,
                        isChangeLogoTypeEnabled: false,
                        isChangeComponentsShapesEnabled: false,
                        isAutoSelectEnabled: false,
                        isAchievementsEnabled: false,
                        isUnlimitedDataEnabled: false,
                        isChatBotEnabled: false,
                    })
                );
                dispatch(disableAutoSelectAction());
                break;

            case "gold":
                dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType: "gold" }));
                dispatch(
                    changeSubscribeControlAction({
                        isChangeGeneralAndUserInfoEnabled: true,
                        isAccessWebsiteControlEnabled: true,
                        isAccessWidgetsControlEnabled: true,
                        isChangeDarkAppearanceColorEnabled: false,
                        isChangeLogoTypeEnabled: false,
                        isChangeComponentsShapesEnabled: false,
                        isAutoSelectEnabled: false,
                        isAchievementsEnabled: false,
                        isUnlimitedDataEnabled: false,
                        isChatBotEnabled: false,
                    })
                );
                dispatch(disableAutoSelectAction());
                break;

            case "platinum":
                dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType: "platinum" }));
                dispatch(
                    changeSubscribeControlAction({
                        isChangeGeneralAndUserInfoEnabled: true,
                        isAccessWebsiteControlEnabled: true,
                        isAccessWidgetsControlEnabled: true,
                        isChangeDarkAppearanceColorEnabled: true,
                        isChangeLogoTypeEnabled: true,
                        isChangeComponentsShapesEnabled: false,
                        isAutoSelectEnabled: false,
                        isAchievementsEnabled: false,
                        isUnlimitedDataEnabled: false,
                        isChatBotEnabled: false,
                    })
                );
                dispatch(disableAutoSelectAction());
                break;

            case "super":
                dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType: "super" }));
                dispatch(
                    changeSubscribeControlAction({
                        isChangeGeneralAndUserInfoEnabled: true,
                        isAccessWebsiteControlEnabled: true,
                        isAccessWidgetsControlEnabled: true,
                        isChangeDarkAppearanceColorEnabled: true,
                        isChangeLogoTypeEnabled: true,
                        isChangeComponentsShapesEnabled: true,
                        isAutoSelectEnabled: true,
                        isAchievementsEnabled: false,
                        isUnlimitedDataEnabled: false,
                        isChatBotEnabled: false,
                    })
                );
                break;

            case "max":
                dispatch(changeSubscriptionAction({ isSubscribed: true, subscribeType: "max" }));
                dispatch(enableAllSubscribeControlAction());
                break;

            default:
                dispatch(changeSubscriptionAction({ isSubscribed: false, subscribeType: "free" }));
                dispatch(disableAllSubscribeControlAction());
        }

        toast.success(`Subscribed successfully your current plan ${subscribeType}`);
        dispatch(pushNotificationAction(`Subscribed successfully your current plan ${subscribeType}.`));
    }

    return (
        <div>
            {subscribeType === state.subscription.subscribeType ? (
                <p className="text-center __secondary_logo">This is your current plan</p>
            ) : (
                <button
                    className={classNames("w-fit text-sm font-semibold py-1 px-2", {
                        "rounded-md": state.switchBooleans.uiControl.isRounded,
                        [logoBackgroundColors[backgroundColor]]: backgroundColor,
                    })}
                    onClick={subscribe}
                >
                    Subscribe
                </button>
            )}
        </div>
    );
};

export default SubscribeButton;
