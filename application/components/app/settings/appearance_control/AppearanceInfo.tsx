import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import AppearanceDarkInfoItem from "./AppearanceDarkInfoItem";
import AppearanceLightInfoItem from "./AppearanceLightInfoItem";
import AppearanceLogoInfoItem from "./AppearanceLogoInfoItem";
import { HiCog } from "react-icons/hi2";
import Subscribe from "@/components/build/Subscribe";

const AppearanceInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    return (
        <Flex className="gap-2" direction="col">
            <Flex className="gap-2 pb-4 __border_b" direction="col">
                <p className="__secondary_logo">Light theme colors</p>

                <Flex className="gap-2" direction="row" items="center">
                    {state.switchBooleans.uiControl.isAutoSelect ? (
                        <HiCog className="text-grey-color dark:text-grey-dark-color animate-spin" size="2rem" />
                    ) : (
                        <>
                            <AppearanceLightInfoItem backgroundColor="default" />
                            {state.components.button.type === "default" && (
                                <AppearanceLightInfoItem backgroundColor="default2" />
                            )}
                            <AppearanceLightInfoItem backgroundColor="red" />
                            <AppearanceLightInfoItem backgroundColor="green" />
                            <AppearanceLightInfoItem backgroundColor="orange" />
                            <AppearanceLightInfoItem backgroundColor="purple" />
                            <AppearanceLightInfoItem backgroundColor="pink" />
                        </>
                    )}
                </Flex>
            </Flex>

            <Flex className="gap-2 pb-4 __border_b" direction="col">
                <p className="__secondary_logo">Dark theme colors</p>

                {state.switchBooleans.subscribeControl.isChangeDarkAppearanceColorEnabled ? (
                    <Flex className="gap-2" direction="row" items="center">
                        {state.switchBooleans.uiControl.isAutoSelect ? (
                            <HiCog className="text-grey-color dark:text-grey-dark-color animate-spin" size="2rem" />
                        ) : (
                            <>
                                <AppearanceDarkInfoItem backgroundColor="default" />
                                {state.components.button.type === "default" && (
                                    <AppearanceDarkInfoItem backgroundColor="default2" />
                                )}
                                <AppearanceDarkInfoItem backgroundColor="red" />
                                <AppearanceDarkInfoItem backgroundColor="green" />
                                <AppearanceDarkInfoItem backgroundColor="orange" />
                                <AppearanceDarkInfoItem backgroundColor="purple" />
                                <AppearanceDarkInfoItem backgroundColor="pink" />
                            </>
                        )}
                    </Flex>
                ) : (
                    <p className="text-sm __secondary_logo">Subscribe first to access this feature</p>
                )}
            </Flex>

            <Flex className="gap-2" direction="col">
                <p className="__secondary_logo">Logo type</p>

                {state.switchBooleans.subscribeControl.isChangeDarkAppearanceColorEnabled ? (
                    <Flex className="gap-2" direction="row" items="center">
                        {state.switchBooleans.uiControl.isAutoSelect ? (
                            <HiCog className="text-grey-color dark:text-grey-dark-color animate-spin" size="2rem" />
                        ) : (
                            <>
                                <Flex className="gap-2" direction="row" items="center">
                                    <AppearanceLogoInfoItem type="default">
                                        <Image
                                            className="cursor-pointer"
                                            src="/logos/favicon.ico"
                                            alt="logo"
                                            width={45}
                                            height={45}
                                        />
                                    </AppearanceLogoInfoItem>
                                    <AppearanceLogoInfoItem type="person1">
                                        <Image
                                            className="cursor-pointer"
                                            src="/logos/person1.png"
                                            alt="logo"
                                            width={45}
                                            height={45}
                                        />
                                    </AppearanceLogoInfoItem>
                                    <AppearanceLogoInfoItem type="person2">
                                        <Image
                                            className="cursor-pointer"
                                            src="/logos/person2.png"
                                            alt="logo"
                                            width={45}
                                            height={45}
                                        />
                                    </AppearanceLogoInfoItem>
                                    <AppearanceLogoInfoItem type="person3">
                                        <Image
                                            className="cursor-pointer"
                                            src="/logos/person3.png"
                                            alt="logo"
                                            width={45}
                                            height={45}
                                        />
                                    </AppearanceLogoInfoItem>
                                    <AppearanceLogoInfoItem type="person4">
                                        <Image
                                            className="cursor-pointer"
                                            src="/logos/person4.png"
                                            alt="logo"
                                            width={45}
                                            height={45}
                                        />
                                    </AppearanceLogoInfoItem>
                                </Flex>
                            </>
                        )}
                    </Flex>
                ) : (
                    <Subscribe subscribeType="platinum" feature="Logo and dark color theme appearance" />
                )}
            </Flex>
        </Flex>
    );
};

export default AppearanceInfo;
