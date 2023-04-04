import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import Image from "next/image";
import React from "react";
import { BiBell, BiSearchAlt2 } from "react-icons/bi";
import { HiArrowSmRight, HiMenuAlt1, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import SecButton from "./SecButton";
import { toast } from "react-toastify";
import classNames from "classnames";
import toggleIsNavMinimizedAction from "@/redux/actions/toggle_actions/toggleIsNavMinimizedAction";
import toggleIsSearchBarShowedAction from "@/redux/actions/toggle_actions/toggleIsSearchBarShowedAction";
import toggleThemeAction from "@/redux/actions/toggle_actions/toggleThemeAction";
import { useRouter } from "next/router";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const Section = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const router = useRouter();
    const dispatch = useDispatch();

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
                                    "bg-[#f1f5f9] text-black dark:bg-[#1a1d21] dark:text-white":
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
                    >
                        <Image className="rounded-full" src="/aissa.jpg" alt="logo" width={40} height={40} />

                        <div>
                            <p className="hidden text-sm font-medium text-black lg:block dark:text-white">Aissa Bedr</p>
                            <p className="hidden text-sm font-semibold lg:block text-grey-color dark:text-grey-dark-color">
                                Founder
                            </p>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Section;
