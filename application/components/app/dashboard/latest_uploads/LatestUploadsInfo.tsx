import Button from "@/components/build/Button";
import Flex from "@/components/build/Flex";
import Grid from "@/components/build/Grid";
import Input from "@/components/build/Input";
import Select from "@/components/build/Select";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LatestUploadsInfoItem from "./LatestUploadsInfoItem";
import { toast } from "react-toastify";
import { fileSizeType, FileType } from "./types/app";
import { Files } from "@/redux/types/data";
import uploadFileAction from "@/redux/actions/add_actions/uploadFileAction";
import Details from "@/components/build/Details";
import Move from "@/components/build/Move";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const LatestUploadsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [fileInfo, setFileInfo] = useState<Files>({
        fileName: "",
        fileType: "txt",
        fileUploader: "",
        fileSize: "" as any,
        fileSizeType: "kb",
    });

    const filesInfo = state.files.map((item) => <LatestUploadsInfoItem key={item.id} {...item} />);

    function uploadFile(): void | false {
        if (!fileInfo.fileName || !fileInfo.fileUploader || !fileInfo.fileSize) {
            toast.error(`${fileInfo.fileType === "jsx" ? "Component" : "File"} can't be empty !`);
            return false;
        }

        for (const file of state.files) {
            if (
                file.fileName.includes(fileInfo.fileName) &&
                file.fileName.length === fileInfo.fileName.length &&
                file.fileType.includes(fileInfo.fileType)
            ) {
                toast.error(`This ${fileInfo.fileType === "jsx" ? "Component" : "File"} already exist !`);
                return false;
            }
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.files.length === 10) {
                toast.error("You cannot add more than 10 files Subscribe to activate unlimited data.");
                return false;
            }
        }

        dispatch(uploadFileAction(fileInfo));
        toast.success(
            `${fileInfo.fileType === "jsx" ? "Component" : "File"} ${fileInfo.fileName}.${
                fileInfo.fileType
            } uploaded successfully !`
        );

        setFileInfo({ fileName: "", fileType: "txt", fileUploader: "", fileSize: "" as any, fileSizeType: "kb" });
    }

    return (
        <Grid className="w-full gap-2 lg:grid-cols-2" cols="1">
            <Input
                type="text"
                placeholder={`${fileInfo.fileType === "jsx" ? "Component" : "File"} name`}
                value={fileInfo.fileName}
                onChange={(e) => setFileInfo((prevState) => ({ ...prevState, fileName: e.target.value }))}
            />
            <Select
                value={fileInfo.fileType}
                onChange={(e) => setFileInfo((prevState) => ({ ...prevState, fileType: e.target.value as FileType }))}
            >
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="txt"
                >
                    txt
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="pdf"
                >
                    pdf
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="avi"
                >
                    avi
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="psd"
                >
                    psd
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="zip"
                >
                    zip
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="dll"
                >
                    dll
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="eps"
                >
                    eps
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="ai">
                    ai
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="iso"
                >
                    iso
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="png"
                >
                    png
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="html"
                >
                    html
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="css"
                >
                    css
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="js">
                    js
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="ts">
                    ts
                </option>
                <option
                    className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                    value="jsx"
                >
                    jsx
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="py">
                    py
                </option>
            </Select>
            <Input
                type="text"
                placeholder={`${fileInfo.fileType === "jsx" ? "Component" : "File"} uploader`}
                value={fileInfo.fileUploader}
                onChange={(e) => setFileInfo((prevState) => ({ ...prevState, fileUploader: e.target.value }))}
            />
            <Input
                type="number"
                placeholder={`${fileInfo.fileType === "jsx" ? "Component" : "File"} size`}
                value={fileInfo.fileSize as any}
                onChange={(e) => setFileInfo((prevState) => ({ ...prevState, fileSize: parseFloat(e.target.value) }))}
            />
            <Select
                value={fileInfo.fileSizeType}
                onChange={(e) =>
                    setFileInfo((prevState) => ({ ...prevState, fileSizeType: e.target.value as fileSizeType }))
                }
            >
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="kb">
                    kb
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="mb">
                    mb
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="gb">
                    gb
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="tb">
                    tb
                </option>
                <option className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white" value="pb">
                    pb
                </option>
            </Select>
            <Button onClick={uploadFile}>Upload file</Button>

            <div className="col-span-2">
                <Details note="Links">
                    <Flex className="px-4 py-2" direction="row" items="center" justify="between">
                        <Move href="/dashboard/files" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                            Files
                        </Move>
                    </Flex>
                </Details>
            </div>

            <Flex
                className={classNames("col-span-2 gap-2", {
                    "h-72 overflow-y-scroll px-1": filesInfo.length >= 5,
                })}
                direction="col"
            >
                {filesInfo.length >= 1 ? (
                    <>{filesInfo}</>
                ) : (
                    <div
                        className={classNames("__data_list_empty", {
                            "rounded-md": state.switchBooleans.uiControl.isRounded,
                        })}
                    >
                        No uploaded files to show !
                    </div>
                )}
            </Flex>
        </Grid>
    );
};

export default LatestUploadsInfo;
