import { AppState } from "@/redux/types/main";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";
import { AppearanceLogoItemProps } from "./types/main";
import changeLogoAppearanceAction from "@/redux/actions/change_actions/changeLogoAppearanceAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const AppearanceLogoInfoItem: FC<AppearanceLogoItemProps> = ({ type, children }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function editLogoType(): void {
        switch (type) {
            case "default":
                dispatch(changeLogoAppearanceAction({ type: "default", src: "logos/favicon.ico" }));
                break;

            case "person1":
                dispatch(changeLogoAppearanceAction({ type: "person1", src: "logos/person1.png" }));
                break;

            case "person2":
                dispatch(changeLogoAppearanceAction({ type: "person2", src: "logos/person2.png" }));
                break;

            case "person3":
                dispatch(changeLogoAppearanceAction({ type: "person3", src: "logos/person3.png" }));
                break;

            case "person4":
                dispatch(changeLogoAppearanceAction({ type: "person4", src: "logos/person4.png" }));
                break;

            default:
                dispatch(changeLogoAppearanceAction({ type: "default", src: "logos/favicon.ico" }));
        }

        toast.success("Logo saved successfully !");
        dispatch(pushNotificationAction("Logo saved successfully."));
    }

    return (
        <div
            className={classNames("duration-300", {
                "-translate-y-1": type === state.appearance.logo.type,
            })}
            onClick={editLogoType}
        >
            {children}
        </div>
    );
};

export default AppearanceLogoInfoItem;
