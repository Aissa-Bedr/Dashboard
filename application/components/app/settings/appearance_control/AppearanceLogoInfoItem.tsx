import { AppState, AppStateAction } from "@/redux/types/main";
import React, { FC } from "react";
import { HiCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import Flex from "@/components/build/Flex";
import { AppearanceLogoItemProps } from "./types/main";

const AppearanceLogoInfoItem: FC<AppearanceLogoItemProps> = ({ type, children }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function editLogoType(): void {
        switch (type) {
            case "default":
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "default", src: "logos/favicon.ico" } } },
                });
                break;

            case "person1":
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "person1", src: "logos/person1.png" } } },
                });
                break;

            case "person2":
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "person2", src: "logos/person2.png" } } },
                });
                break;

            case "person3":
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "person3", src: "logos/person3.png" } } },
                });
                break;

            case "person4":
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "person4", src: "logos/person4.png" } } },
                });
                break;

            default:
                dispatch({
                    type: "changeLogoAppearance",
                    payload: { appearance: { logo: { type: "default", src: "logos/favicon.ico" } } },
                });
        }

        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.success("Logo saved successfully !", {
                position: "top-center",
                theme: state.theme,
            });
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
