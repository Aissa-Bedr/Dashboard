import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import Image from "next/image";
import React, { useState } from "react";
import { BiBell, BiSearchAlt2 } from "react-icons/bi";
import { HiArrowSmRight, HiMenuAlt1, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import SecButton from "./SecButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classNames from "classnames";
import Button from "@/components/build/Button";
import Input from "@/components/build/Input";

const Section = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const [searchBarOptions, setSearchBarOptions] = useState({
        showSearchBar: false,
        showSearchBtn: false,
    });

    return (
        <>
            <Flex
                className={classNames("w-full p-4 duration-300 bg-white lg:px-4 lg:py-0 dark:bg-dark", {
                    "fixed top-0 left-0 z-40 shadow-md shadow-[#ddd] dark:shadow-grey-dark-alt-color":
                        switchBooleans.uiControl.isNavFixed,
                    "relative shadow-none": !switchBooleans.uiControl.isNavFixed,
                })}
                direction="row"
                items="center"
                justify="between"
            >
                <Flex className="lg:gap-12" direction="row" items="center">
                    <Flex className="relative gap-2" direction="row" items="center">
                        <div
                            className={classNames("absolute hidden lg:block", {
                                "left-16":
                                    switchBooleans.uiControl.isNavFixed &&
                                    switchBooleans.uiControl.isNavMinimized &&
                                    !switchBooleans.uiControl.isNewNavbar,
                                "left-56":
                                    switchBooleans.uiControl.isNavFixed &&
                                    !switchBooleans.uiControl.isNavMinimized &&
                                    !switchBooleans.uiControl.isNewNavbar,
                            })}
                        >
                            <SecButton onClick={() => dispatch({ type: "toggleIsNavMinimized" })}>
                                {switchBooleans.uiControl.isNavMinimized ? (
                                    <HiArrowSmRight size="1.5rem" />
                                ) : (
                                    <HiMenuAlt1 size="1.5rem" />
                                )}
                            </SecButton>
                        </div>
                    </Flex>

                    {!switchBooleans.uiControl.isNewSearchbar && (
                        <Flex className="relative gap-2" direction="row" items="center">
                            <div>
                                <BiSearchAlt2 className="absolute hidden text-lg md:block top-2 left-2 text-grey-color dark:text-grey-dark-color" />
                                <Input
                                    className="hidden md:block !py-1.5 !px-2 !pl-7 !w-36 focus:!w-52"
                                    type="text"
                                    placeholder="Type A Keyword"
                                    onFocus={() =>
                                        setSearchBarOptions((prevState) => ({ ...prevState, showSearchBtn: true }))
                                    }
                                    onBlur={() =>
                                        setSearchBarOptions((prevState) => ({ ...prevState, showSearchBtn: false }))
                                    }
                                />
                            </div>

                            {searchBarOptions.showSearchBtn && <Button className="w-16 !py-1">Search</Button>}
                        </Flex>
                    )}
                </Flex>

                <Flex className="gap-2" direction="row" items="center">
                    <SecButton
                        className={classNames("block", { "md:!hidden": !switchBooleans.uiControl.isNewSearchbar })}
                        onClick={() =>
                            setSearchBarOptions((prevState) => ({
                                ...prevState,
                                showSearchBar: !prevState.showSearchBar,
                            }))
                        }
                    >
                        <BiSearchAlt2 size="1.5rem" />
                    </SecButton>

                    <SecButton
                        onClick={() => {
                            dispatch({ type: "toggleTheme" });
                            switchBooleans.websiteControl.isNotificationActive &&
                                toast.success(
                                    `Theme changed successfully current theme: ${
                                        state.theme === "dark" ? "light" : "dark"
                                    }`,
                                    {
                                        position: "top-center",
                                        theme: state.theme === "dark" ? "light" : "dark",
                                    }
                                );
                        }}
                    >
                        {state.theme === "light" ? <HiOutlineMoon size="1.5rem" /> : <HiOutlineSun size="1.5rem" />}
                    </SecButton>
                    <SecButton>
                        <BiBell size="1.5rem" />
                    </SecButton>

                    <Flex
                        className="gap-2 p-0 cursor-pointer lg:py-2 lg:px-4 lg:bg-grey-alt-color lg:dark:bg-grey-dark-alt-color"
                        direction="row"
                        items="center"
                    >
                        <Image className="cursor-pointer" src="/favicon.ico" alt="logo" width={35} height={35} />

                        <div>
                            <p className="hidden text-sm font-medium text-black lg:block dark:text-white">Aissa Bedr</p>
                            <p className="hidden text-sm font-semibold lg:block text-grey-color dark:text-grey-dark-color">
                                Founder
                            </p>
                        </div>
                    </Flex>
                </Flex>
            </Flex>

            {searchBarOptions.showSearchBar && (
                <Flex
                    className={classNames(
                        "gap-1 px-4 py-2 bg-white dark:bg-dark border-solid border-t-[1px] border-t-grey-alt-color dark:border-t-grey-dark-color",
                        {
                            "absolute w-full top-[4.5rem] lg:top-14 z-50": switchBooleans.uiControl.isNavFixed,
                            "md:hidden": !switchBooleans.uiControl.isNewSearchbar,
                        }
                    )}
                    direction="row"
                >
                    <Input className="!p-2" type="text" placeholder="Type A Keyword" />

                    <Button className="w-1/4 __button_end lg:w-32">
                        <BiSearchAlt2 size="1.5rem" />
                    </Button>
                </Flex>
            )}
        </>
    );
};

export default Section;
