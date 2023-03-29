import Flex from "@/components/build/Flex";
import { AppState, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import SecondaryLogo from "../../main/SecondaryLogo";
import { LatestUploadsInfoItemProps } from "./types/main";

const LatestUploadsInfoItem: FC<LatestUploadsInfoItemProps> = ({
    src,
    fileName,
    fileUploader,
    fileSize,
    dontIncludeBorder,
}) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);

    return (
        <Flex
            className={classNames("pb-2", { __border_b: !dontIncludeBorder })}
            direction="row"
            items="center"
            justify="between"
        >
            <Flex className="gap-2" direction="row" items="center">
                <Image src={src} alt="file_upload" width={45} height={45} />

                <Flex className="gap-2" direction="col" items="start">
                    <p>{fileName}</p>
                    <SecondaryLogo text={fileUploader} />
                </Flex>
            </Flex>

            <div
                className={classNames(
                    "px-2 py-1 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color",
                    { "rounded-md": switchBooleans.uiControl.isRounded }
                )}
            >
                <p className="text-sm">{fileSize}mb</p>
            </div>
        </Flex>
    );
};

export default LatestUploadsInfoItem;
