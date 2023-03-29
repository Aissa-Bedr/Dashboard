import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ItemRatioValues, PrimaryBackgroundThemes, SecondaryBackgroundThemes, YearlyInfoItemProps } from "./types/main";

const YearlyInfoItem: FC<YearlyInfoItemProps> = ({
    icon,
    firstSecContent,
    secondSecContent,
    primaryBackground,
    secondaryBackground,
    ratio,
}) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    const primaryBackgroundThemes: PrimaryBackgroundThemes = {
        blue: "bg-blue-color dark:bg-blue-dark-color",
        orange: "bg-orange-color",
        green: "bg-green-color",
    };

    const secondaryBackgroundThemes: SecondaryBackgroundThemes = {
        blue: "bg-[#d4e3ff]",
        orange: "bg-[#fdebd4]",
        green: "bg-[#d6f4df]",
    };

    const itemRatioValues: ItemRatioValues = {
        "25": "w-1/4",
        "50": "w-1/2",
        "75": "w-3/4",
    };

    return (
        <>
            <Flex className="w-full" direction="col">
                <Flex className="gap-4" direction="row" items="center">
                    <Flex
                        className={classNames("w-24 h-20", {
                            [secondaryBackgroundThemes[secondaryBackground]]: secondaryBackground,
                            "rounded-md": switchBooleans.uiControl.isRounded,
                        })}
                        direction="row"
                        items="center"
                        justify="center"
                    >
                        {icon}
                    </Flex>

                    <Flex className="w-full gap-2" direction="col">
                        <p className="text-sm text-grey-color dark:text-grey-dark-color">{firstSecContent}</p>
                        <p className="text-lg font-bold capitalize">{secondSecContent}</p>
                        <div
                            className={classNames("w-full h-1", {
                                [secondaryBackgroundThemes[secondaryBackground]]: secondaryBackground,
                                "rounded-md": switchBooleans.uiControl.isRounded,
                            })}
                        >
                            <div
                                className={classNames("relative h-1 z-10", {
                                    [primaryBackgroundThemes[primaryBackground]]: primaryBackground,
                                    [itemRatioValues[ratio]]: ratio,
                                    "rounded-md": switchBooleans.uiControl.isRounded,
                                })}
                            >
                                <div
                                    className={classNames("absolute text-sm right-0 -top-8 py-0.5 px-1 text-white", {
                                        [primaryBackgroundThemes[primaryBackground]]: primaryBackground,
                                        "rounded-md": switchBooleans.uiControl.isRounded,
                                    })}
                                >
                                    {ratio}%
                                </div>
                            </div>
                        </div>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default YearlyInfoItem;
