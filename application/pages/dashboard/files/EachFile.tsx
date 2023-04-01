import Flex from "@/components/build/Flex";
import { AppState, AppStateAction } from "@/redux/types/main";
import classNames from "classnames";
import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LatestUploadsInfoItemProps } from "@/components/app/dashboard/latest_uploads/types/main";
import SecondaryLogo from "@/components/app/main/SecondaryLogo";
import BoxContainer from "@/components/app/main/BoxContainer";
import removeFileAction from "@/redux/actions/remove_actions/removeFileAction";

const EachFile: FC<LatestUploadsInfoItemProps> = ({ id, fileName, fileType, fileUploader, fileSize, fileSizeType }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeFile(): void {
        dispatch(removeFileAction(id!));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`${fileType === "jsx" ? "Component" : "File"} removed successfully !`, {
                position: "top-center",
                theme: state.theme,
            });
    }

    return (
        <>
            <BoxContainer>
                <div className="py-2 __border_b">
                    <Flex className="gap-2" direction="col" items="center" justify="center">
                        <Image
                            className="duration-500 hover:rotate-[360deg]"
                            src={`/dashboard/files/${fileType}.svg`}
                            alt="file_upload"
                            width={75}
                            height={75}
                        />

                        <p>
                            {fileName}.{fileType}
                        </p>
                    </Flex>

                    <SecondaryLogo text={fileUploader} />
                </div>

                <Flex className="mt-2" direction="row" items="center" justify="between">
                    <button
                        className={classNames(
                            "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                            { "rounded-md": state.switchBooleans.uiControl.isRounded }
                        )}
                        onClick={removeFile}
                    >
                        Remove
                    </button>

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
                </Flex>
            </BoxContainer>
        </>
    );
};

export default EachFile;
