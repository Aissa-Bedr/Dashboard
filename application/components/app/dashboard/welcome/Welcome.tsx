import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import WelcomeInfo from "./WelcomeInfo";

const Welcome = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    return (
        <BoxContainer dontIncludeSpaces>
            <Flex className="relative" direction="col">
                <Flex
                    className={classNames("p-5 mb-10 bg-grey-alt-color dark:bg-grey-dark-alt-color", {
                        "rounded-md rounded-b-none": switchBooleans.uiControl.isRounded,
                    })}
                    direction="row"
                    items="start"
                    justify="between"
                >
                    <LogoContainer>
                        <PrimaryLogo text="welcome" />
                        <SecondaryLogo text={state.generalInfo.firstName} />
                    </LogoContainer>

                    <>
                        <Image
                            className="hidden lg:block"
                            src="/dashboard/welcome.png"
                            alt="welcome_image"
                            width={200}
                            height={200}
                        />
                    </>
                </Flex>

                <Image
                    className="absolute top-[8.3rem] lg:top-32 left-6 cursor-pointer"
                    src={`/${state.appearance.logo.src}`}
                    alt="logo"
                    width={50}
                    height={50}
                />

                <ContentWrapper>
                    <WelcomeInfo />
                </ContentWrapper>

                <Flex className="p-5" direction="row" items="end" justify="end">
                    <Link
                        className={classNames("w-16 __button_end", {
                            __default_button: state.components.button.type === "default",
                            [`__primary_button ${state.appearance.dark.color}`]:
                                state.components.button.type !== "default" && state.theme === "dark",
                            [`__primary_button ${state.appearance.light.color}`]:
                                state.components.button.type !== "default" && state.theme === "light",
                            "!text-black dark:!text-white":
                                state.appearance.light.theme === "default2" &&
                                state.components.button.type === "default",
                            [state.appearance.dark.backgroundColor]: state.theme === "dark",
                            [state.appearance.light.backgroundColor]: state.theme === "light",
                            "rounded-md": switchBooleans.uiControl.isRounded,
                        })}
                        href="/profile"
                        onClick={() =>
                            dispatch({ type: "changeLink", payload: { links: { currentLinkValue: "profile" } } })
                        }
                    >
                        Profile
                    </Link>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default Welcome;
