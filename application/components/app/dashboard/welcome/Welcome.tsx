import ContentWrapper from "@/components/build/ContentWrapper";
import Flex from "@/components/build/Flex";
import LogoContainer from "@/components/build/LogoContainer";
import Move from "@/components/build/Move";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import PrimaryLogo from "../../main/PrimaryLogo";
import SecondaryLogo from "../../main/SecondaryLogo";
import { WelcomeProps } from "./types/main";
import WelcomeInfo from "./WelcomeInfo";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import Details from "@/components/build/Details";

const Welcome: FC<WelcomeProps> = ({ dontIncludeShowMoreLink }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    return (
        <BoxContainer dontIncludeSpaces>
            <Flex className="relative" direction="col">
                <Flex
                    className={classNames("p-5 mb-10 bg-grey-alt-color dark:bg-grey-dark-alt-color", {
                        "rounded-md rounded-b-none": state.switchBooleans.uiControl.isRounded,
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

                <div className="m-4">
                    <Details note="Links">
                        <Flex className="px-4 py-2" direction="row" items="center" justify="between">
                            {!dontIncludeShowMoreLink && (
                                <Move href="/dashboard/welcome" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                                    Welcome
                                </Move>
                            )}

                            <Move href="/profile" onClick={() => dispatch(changeLinkAction("profile"))}>
                                Profile
                            </Move>
                        </Flex>
                    </Details>
                </div>
            </Flex>
        </BoxContainer>
    );
};

export default Welcome;
