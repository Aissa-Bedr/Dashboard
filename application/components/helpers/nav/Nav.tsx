import React from "react";
import LinkElement from "./LinkElement";
import linksData from "./data/linksData";
import { useSelector } from "react-redux";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Flex from "@/components/build/Flex";

const Nav = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    const links = linksData.map((link) => <LinkElement key={link.id} {...link} />);

    return (
        <>
            {!switchBooleans.uiControl.isNewNavbar && (
                <nav
                    className={classNames("h-screen bg-white dark:bg-dark shadow-lg z-50 duration-300", {
                        "sticky top-0 shadow-[#ddd] dark:shadow-grey-dark-alt-color":
                            switchBooleans.uiControl.isNavFixed,
                        "relative shadow-none": !switchBooleans.uiControl.isNavFixed,
                    })}
                >
                    <Flex
                        className={classNames("my-4", {
                            "lg:mb-10": !switchBooleans.uiControl.isNavMinimized,
                        })}
                        direction="row"
                        items="center"
                        justify="center"
                    >
                        <p
                            className={classNames("__nav_logo text-sm", {
                                "w-12": switchBooleans.uiControl.isNavMinimized,
                                "lg:w-32 lg:text-xl": !switchBooleans.uiControl.isNavMinimized,
                            })}
                        >
                            {state.generalInfo.firstName}
                        </p>
                    </Flex>

                    <ul
                        className={classNames("flex flex-col w-12 gap-2 mx-2", {
                            "lg:w-48 lg:mx-4": !switchBooleans.uiControl.isNavMinimized,
                        })}
                    >
                        {links}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Nav;
