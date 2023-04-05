import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import Image from "next/image";
import React, { useState } from "react";
import { BiBell, BiRefresh, BiSearchAlt2, BiUser } from "react-icons/bi";
import { HiArrowSmRight, HiCurrencyDollar, HiMenuAlt1, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import SecButton from "./SecButton";
import { toast } from "react-toastify";
import classNames from "classnames";
import toggleIsNavMinimizedAction from "@/redux/actions/toggle_actions/toggleIsNavMinimizedAction";
import toggleIsSearchBarShowedAction from "@/redux/actions/toggle_actions/toggleIsSearchBarShowedAction";
import toggleThemeAction from "@/redux/actions/toggle_actions/toggleThemeAction";
import { useRouter } from "next/router";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import Link from "next/link";
import { BsRobot } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Section = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const router = useRouter();
    const dispatch = useDispatch();

    const [isSettingsActive, setIsSettingsActive] = useState(false);

    const refresh = (): void => window.location.reload();

    return (
        <>
            <Flex
                className={classNames("w-full p-4 duration-300 bg-white lg:px-4 lg:py-0 dark:bg-dark", {
                    "fixed top-0 left-0 z-40 shadow-md shadow-[#ddd] dark:shadow-grey-dark-alt-color":
                        state.switchBooleans.uiControl.isNavFixed,
                    "relative shadow-none": !state.switchBooleans.uiControl.isNavFixed,
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
                                    state.switchBooleans.uiControl.isNavFixed &&
                                    state.switchBooleans.uiControl.isNavMinimized &&
                                    !state.switchBooleans.uiControl.isNewNavbar,
                                "left-56":
                                    state.switchBooleans.uiControl.isNavFixed &&
                                    !state.switchBooleans.uiControl.isNavMinimized &&
                                    !state.switchBooleans.uiControl.isNewNavbar,
                            })}
                        >
                            <SecButton onClick={() => dispatch(toggleIsNavMinimizedAction())}>
                                {state.switchBooleans.uiControl.isNavMinimized ? (
                                    <HiArrowSmRight size="1.5rem" />
                                ) : (
                                    <HiMenuAlt1 size="1.5rem" />
                                )}
                            </SecButton>
                        </div>
                    </Flex>
                </Flex>

                <Flex className="gap-2" direction="row" items="center">
                    <SecButton
                        className={classNames({ "!hidden": !state.switchBooleans.uiControl.isNewSearchbar })}
                        onClick={() => dispatch(toggleIsSearchBarShowedAction())}
                    >
                        <BiSearchAlt2 size="1.5rem" />
                    </SecButton>

                    <SecButton
                        onClick={() => {
                            dispatch(toggleThemeAction());
                            toast.success(
                                `Theme changed successfully current theme: ${
                                    state.theme === "dark" ? "light" : "dark"
                                }`,
                                {
                                    theme: state.theme === "dark" ? "light" : "dark",
                                }
                            );
                        }}
                    >
                        {state.theme === "light" ? <HiOutlineMoon size="1.5rem" /> : <HiOutlineSun size="1.5rem" />}
                    </SecButton>

                    <SecButton
                        onClick={() => {
                            router.push("/notifications");
                            dispatch(changeLinkAction("dashboard"));
                        }}
                    >
                        <div className="relative">
                            <Flex
                                className={classNames("absolute w-5 h-5 -top-2 -right-2 rounded-full", {
                                    "bg-red-color text-white": state.notifications.length >= 1,
                                    "bg-light text-black dark:bg-[#1a1d21] dark:text-white":
                                        state.notifications.length === 0,
                                })}
                                direction="row"
                                items="center"
                                justify="center"
                            >
                                <p className="text-sm font-semibold">{state.notifications.length}</p>
                            </Flex>
                            <BiBell size="1.5rem" />
                        </div>
                    </SecButton>

                    <Flex
                        className="gap-2 p-0 cursor-pointer lg:py-2 lg:px-4 lg:bg-grey-alt-color lg:dark:bg-grey-dark-alt-color"
                        direction="row"
                        items="center"
                        onClick={() => setIsSettingsActive((prevState) => !prevState)}
                    >
                        <Image className="rounded-full" src="/aissa.jpg" alt="logo" width={40} height={40} />

                        <div>
                            <p className="hidden text-sm font-medium text-black lg:block dark:text-white">Aissa Bedr</p>
                            <p className="hidden text-sm font-semibold lg:block text-grey-color dark:text-grey-dark-color">
                                Founder
                            </p>
                        </div>
                    </Flex>

                    {isSettingsActive && (
                        <Flex
                            className={classNames(
                                "absolute gap-4 w-full right-0 top-20 py-4 bg-white text-black dark:bg-dark dark:text-grey-dark-color __border lg:w-48 lg:top-16 lg:right-4",
                                { "rounded-md": state.switchBooleans.uiControl.isRounded }
                            )}
                            direction="col"
                            items="start"
                        >
                            <p className="px-2 text-sm font-medium">
                                Welcome {state.information.generalInfo.firstName} !
                            </p>

                            <Flex className="w-full gap-2" direction="col">
                                <div className="w-full pb-2 __border_b">
                                    <Link
                                        className="flex flex-row items-center w-full gap-2 hover:bg-light dark:hover:bg-[#1a1d21] p-2 duration-300"
                                        href="/profile"
                                        onClick={() => dispatch(changeLinkAction("profile"))}
                                    >
                                        <BiUser className="text-black dark:text-grey-dark-color" />

                                        <p className="text-sm font-semibold">Profile</p>
                                    </Link>

                                    <Link
                                        className="flex flex-row items-center w-full gap-2 hover:bg-light dark:hover:bg-[#1a1d21] p-2 duration-300"
                                        href="/chat-bot"
                                        onClick={() => dispatch(changeLinkAction("chat-bot"))}
                                    >
                                        <BsRobot className="text-black dark:text-grey-dark-color" />

                                        <p className="text-sm font-semibold">Chat Bot</p>
                                    </Link>
                                </div>

                                <div className="w-full">
                                    <Link
                                        className="flex flex-row items-center w-full gap-2 hover:bg-light dark:hover:bg-[#1a1d21] p-2 duration-300"
                                        href="/settings"
                                        onClick={() => dispatch(changeLinkAction("settings"))}
                                    >
                                        <FiSettings className="text-black dark:text-grey-dark-color" />

                                        <p className="text-sm font-semibold">Settings</p>
                                    </Link>

                                    <Flex
                                        className="w-full gap-2 hover:bg-light dark:hover:bg-[#1a1d21] p-2 duration-300"
                                        direction="row"
                                        items="center"
                                    >
                                        <HiCurrencyDollar className="text-black dark:text-grey-dark-color" />

                                        <p className="text-sm font-semibold">Balance: ${0}</p>
                                    </Flex>

                                    <Flex
                                        className="w-full gap-2 hover:bg-light dark:hover:bg-[#1a1d21] p-2 duration-300 cursor-pointer"
                                        direction="row"
                                        items="center"
                                        onClick={refresh}
                                    >
                                        <BiRefresh className="text-black dark:text-grey-dark-color" />

                                        <p className="text-sm font-semibold">Refresh</p>
                                    </Flex>
                                </div>
                            </Flex>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </>
    );
};

export default Section;
