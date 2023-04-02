import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import linksData from "../nav/data/linksData";
import LinkElement from "../nav/LinkElement";

const NewNav = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    const links = linksData.map((link) => <LinkElement key={link.id} {...link} />);

    return (
        <Flex className="z-50 w-full duration-300" direction="row" items="center" justify="center">
            {state.switchBooleans.uiControl.isNewNavbar && (
                <nav
                    className={classNames("z-50 fixed h-fit bottom-2", {
                        "xl:top-1": state.switchBooleans.uiControl.isNewNavInTheTop,
                    })}
                >
                    <ul
                        className={classNames(
                            "grid grid-cols-4 md:flex md:flex-row gap-2 p-2 bg-white dark:bg-dark shadow-lg shadow-[#ccc] dark:shadow-grey-dark-alt-color",
                            {
                                "rounded-md": state.switchBooleans.uiControl.isRounded,
                                "xl:!shadow-none": state.switchBooleans.uiControl.isNewNavInTheTop,
                            }
                        )}
                    >
                        {links}
                    </ul>
                </nav>
            )}
        </Flex>
    );
};

export default NewNav;
