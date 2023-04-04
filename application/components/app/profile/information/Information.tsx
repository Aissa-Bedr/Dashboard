import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { RiVipCrownLine } from "react-icons/ri";
import { GiSpikedDragonHead } from "react-icons/gi";
import { useSelector } from "react-redux";
import BoxContainer from "../../main/BoxContainer";
import SecondaryLogo from "../../main/SecondaryLogo";
import { MdComputer } from "react-icons/md";
import Grid from "@/components/build/Grid";
import InfoBox from "./InfoBox";
import InfoBoxItem from "./InfoBoxItem";
import {
    TOGGLE_IS_BILLING_INFO_ACTIVE,
    TOGGLE_IS_GENERAL_INFO_ACTIVE,
    TOGGLE_IS_JOB_INFO_ACTIVE,
    TOGGLE_IS_PERSONAL_INFO_ACTIVE,
} from "@/redux/constants/toggleTypes";
import classNames from "classnames";

const Information = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <BoxContainer className="col-span-3">
            <Flex className="w-full gap-4 xl:flex-row" direction="col" items="center" justify="center">
                <Flex
                    className="w-48 h-full gap-4 py-2 border-solid border-b-[1px] border-r-0 xl:border-b-0 xl:p-0 xl:border-r-[1px] border-grey-alt-color dark:border-grey-dark-alt-color"
                    direction="col"
                    items="center"
                    justify="center"
                >
                    <Image src={`/${state.appearance.logo.src}`} alt="logo" width={100} height={100} />

                    <SecondaryLogo
                        text={`${state.information.generalInfo.firstName} ${state.information.generalInfo.lastName}`}
                    />

                    <Grid className="gap-2" cols="4">
                        {state.subscription.isSubscribed && (
                            <RiVipCrownLine
                                className={classNames("duration-300 hover:scale-110", {
                                    "text-[#f1f5f9]": state.subscription.subscribeType === "silver",
                                    "text-[#FDFFBC]": state.subscription.subscribeType === "gold",
                                    "text-[#DAEAF1]": state.subscription.subscribeType === "platinum",
                                    "text-purple-400": state.subscription.subscribeType === "super",
                                    "text-red-400": state.subscription.subscribeType === "max",
                                })}
                                size="1.5rem"
                            />
                        )}
                        {state.switchBooleans.subscribeControl.isAchievementsEnabled && (
                            <>
                                <GiSpikedDragonHead
                                    className="text-red-400 duration-300 hover:scale-110"
                                    size="1.5rem"
                                />

                                <AiOutlineStar className="text-yellow-300 duration-300 hover:scale-110" size="1.5rem" />

                                <MdComputer
                                    className="duration-300 text-dark dark:text-white hover:scale-110"
                                    size="1.5rem"
                                />
                            </>
                        )}
                    </Grid>
                </Flex>

                <Flex className="w-full" direction="col">
                    <InfoBox
                        title="General information"
                        isChecked={state.switchBooleans.profileControl.isGeneralInfoActive}
                        dispatchType={TOGGLE_IS_GENERAL_INFO_ACTIVE}
                    >
                        <InfoBoxItem
                            prop="Full name:"
                            value={`${state.information.generalInfo.firstName} ${state.information.generalInfo.lastName}`}
                        />

                        <InfoBoxItem prop="Gender:" value={state.information.profileInfo.gender} />

                        <InfoBoxItem prop="Country:" value={state.information.profileInfo.country} />
                    </InfoBox>

                    <InfoBox
                        title="Personal Information"
                        isChecked={state.switchBooleans.profileControl.isPersonalInfoActive}
                        dispatchType={TOGGLE_IS_PERSONAL_INFO_ACTIVE}
                    >
                        <InfoBoxItem prop="Email:" value={state.information.profileInfo.email} />

                        <InfoBoxItem prop="Phone:" value={state.information.profileInfo.phone} />

                        <InfoBoxItem prop="Date of birth:" value={state.information.profileInfo.birthDay} />
                    </InfoBox>

                    <InfoBox
                        title="Job information"
                        isChecked={state.switchBooleans.profileControl.isJobInfoActive}
                        dispatchType={TOGGLE_IS_JOB_INFO_ACTIVE}
                    >
                        <InfoBoxItem prop="Title:" value={state.information.userInfo.designation} />

                        <InfoBoxItem
                            prop="
                            Programming language:"
                            value={state.information.profileInfo.programmingLanguage}
                        />

                        <InfoBoxItem prop="Years of experience:" value={state.information.profileInfo.experience} />
                    </InfoBox>

                    <InfoBox
                        title="Billing information"
                        isChecked={state.switchBooleans.profileControl.isBillingInfoActive}
                        dispatchType={TOGGLE_IS_BILLING_INFO_ACTIVE}
                    >
                        <InfoBoxItem prop="paymentMethod:" value={state.information.profileInfo.paymentMethod} />

                        <InfoBoxItem prop="subscribed:" value={state.subscription.isSubscribed ? "yes" : "no"} />

                        <InfoBoxItem prop="Subscription:" value={state.subscription.subscribeType} />
                    </InfoBox>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default Information;
