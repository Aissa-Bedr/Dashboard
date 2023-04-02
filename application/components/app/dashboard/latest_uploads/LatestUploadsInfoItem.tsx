import Flex from "@/components/build/Flex";
import { AppState, AppStateAction } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import SecondaryLogo from "../../main/SecondaryLogo";
import { LatestUploadsInfoItemProps } from "./types/main";
import { toast } from "react-toastify";
import removeFileAction from "@/redux/actions/remove_actions/removeFileAction";

const LatestUploadsInfoItem: FC<LatestUploadsInfoItemProps> = ({
    id,
    fileName,
    fileType,
    fileUploader,
    fileSize,
    fileSizeType,
}) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeFile(): void {
        dispatch(removeFileAction(id!));
        toast.warning(`${fileType === "jsx" ? "Component" : "File"} removed successfully !`);
    }

    return (
        <Flex className="pb-2 __border_b" direction="row" items="center" justify="between">
            <Flex className="gap-2" direction="row" items="center">
                <Image src={`/dashboard/files/${fileType}.svg`} alt="file_upload" width={45} height={45} />

                <Flex className="gap-2" direction="col" items="start">
                    <p>
                        {fileName}.{fileType}
                    </p>
                    <SecondaryLogo text={fileUploader} />
                </Flex>
            </Flex>

            <Flex className="gap-2" direction="row" items="center">
                <div
                    className={classNames(
                        "px-2 py-1 text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-grey-dark-color",
                        { "rounded-md": state.switchBooleans.uiControl.isRounded }
                    )}
                >
                    <p className="text-sm">
                        {fileSize}
                        {fileSizeType}
                    </p>
                </div>

                <FiTrash2
                    className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                    onClick={removeFile}
                />
            </Flex>
        </Flex>
    );
};

export default LatestUploadsInfoItem;
