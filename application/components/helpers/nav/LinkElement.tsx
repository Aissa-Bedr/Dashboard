import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkElementProps } from "./types/main";

const LinkElement: FC<LinkElementProps> = ({ link, href, icon, content }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    return (
        <li>
            <Link
                className={classNames({
                    __active_link: state.currentLink === link,
                    __link: state.currentLink !== link,
                    "rounded-md": state.switchBooleans.uiControl.isRounded,
                })}
                href={`/${href}`}
                onClick={() => dispatch({ type: "changeLink", payload: { links: { currentLinkValue: link } } })}
            >
                {icon}
                {state.switchBooleans.uiControl.isNavMinimized ? (
                    <p className="hidden">{content}</p>
                ) : (
                    <p className="hidden text-black lg:block dark:text-white">{content}</p>
                )}
            </Link>
        </li>
    );
};

export default LinkElement;
