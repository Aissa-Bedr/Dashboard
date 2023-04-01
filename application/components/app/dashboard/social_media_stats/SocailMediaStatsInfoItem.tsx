import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { SocailMediaStatsInfoItemProps, ThemeTypes } from "./types/main";

const SocailMediaStatsInfoItem: FC<SocailMediaStatsInfoItemProps> = ({
    icon,
    content,
    buttonContent,
    href,
    backgroundColor,
    backgroundTheme,
    colorTheme,
}) => {
    const state = useSelector<AppState, AppState>((state) => state);

    const backgroundThemeTypes: ThemeTypes = {
        blue: "bg-[#1877f2] dark:bg-blue-dark-color",
        red: "bg-[#ff0000] dark:bg-red-color",
    };

    const colorThemeTypes: ThemeTypes = {
        blue: "text-[#1877f2] dark:text-blue-dark-color",
        red: "text-[#ff0000] dark:text-red-color",
    };

    return (
        <Flex
            className={classNames({
                [backgroundColor]: backgroundColor,
            })}
            direction="row"
        >
            <Flex
                className={classNames("py-3 px-4 text-white", {
                    [backgroundThemeTypes[backgroundTheme]]: backgroundTheme,
                })}
                direction="row"
                items="center"
                justify="center"
            >
                {icon}
            </Flex>
            <Flex className="relative w-full px-4 py-3" direction="row" items="center" justify="between">
                <p className={classNames("capitalize", { [colorThemeTypes[colorTheme]]: colorTheme })}>{content}</p>

                <a
                    className={classNames("capitalize text-sm py-1 px-2 text-white", {
                        "rounded-md": state.switchBooleans.uiControl.isRounded,
                        [backgroundThemeTypes[backgroundTheme]]: backgroundTheme,
                    })}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonContent}
                </a>
            </Flex>
        </Flex>
    );
};

export default SocailMediaStatsInfoItem;
