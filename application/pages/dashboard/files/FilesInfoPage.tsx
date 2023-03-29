import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, Files, SwitchBooleans } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import Select from "@/components/build/Select";
import EachFile from "./EachFile";
import { fileSizeType, FileType } from "@/components/app/dashboard/latest_uploads/types/app";

const FilesInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [fileInfo, setFileInfo] = useState<Files>({
        fileName: "",
        fileType: "txt",
        fileUploader: "",
        fileSize: null,
        fileSizeType: "kb",
    });

    const filesInfo = state.files.map((item) => <EachFile key={item.id} {...item} />);

    function uploadFile(): void | false {
        if (!fileInfo.fileName || !fileInfo.fileUploader || !fileInfo.fileSize) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`${fileInfo.fileType === "jsx" ? "Component" : "File"} can't be empty !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        for (const file of state.files) {
            if (
                file.fileName.includes(fileInfo.fileName) &&
                file.fileName.length === fileInfo.fileName.length &&
                file.fileType.includes(fileInfo.fileType)
            ) {
                switchBooleans.websiteControl.isNotificationActive &&
                    toast.error(`This ${fileInfo.fileType === "jsx" ? "Component" : "File"} already exist !`, {
                        position: "top-center",
                        theme: state.theme,
                    });
                return false;
            }
        }

        dispatch({ type: "uploadFile", payload: { files: fileInfo } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(
                `${fileInfo.fileType === "jsx" ? "Component" : "File"} ${fileInfo.fileName}.${
                    fileInfo.fileType
                } uploaded successfully !`,
                {
                    position: "top-center",
                    theme: state.theme,
                }
            );
        setFileInfo({ fileName: "", fileType: "txt", fileUploader: "", fileSize: "" as any, fileSizeType: "kb" });
    }

    return (
        <>
            <BoxContainer className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder={`${fileInfo.fileType === "jsx" ? "Component" : "File"} name`}
                    value={fileInfo.fileName}
                    onChange={(e) => setFileInfo((prevState) => ({ ...prevState, fileName: e.target.value }))}
                />
                <Select
                    value={fileInfo.fileType}
                    onChange={(e) =>
                        setFileInfo((prevState) => ({ ...prevState, fileType: e.target.value as FileType }))
                    }
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
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="ai"
                    >
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
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="js"
                    >
                        js
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="ts"
                    >
                        ts
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="jsx"
                    >
                        jsx
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="py"
                    >
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
                    onChange={(e) =>
                        setFileInfo((prevState) => ({ ...prevState, fileSize: parseFloat(e.target.value) }))
                    }
                />
                <Select
                    value={fileInfo.fileSizeType}
                    onChange={(e) =>
                        setFileInfo((prevState) => ({ ...prevState, fileSizeType: e.target.value as fileSizeType }))
                    }
                >
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="kb"
                    >
                        kb
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="mb"
                    >
                        mb
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="gb"
                    >
                        gb
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="tb"
                    >
                        tb
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="pb"
                    >
                        pb
                    </option>
                </Select>

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Files" listLength={filesInfo.length} />

                    <Button className="px-2 py-1" onClick={uploadFile}>
                        Upload file
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="gap-4 mt-4" cols="1">
                {state.files.length > 0 ? (
                    <Grid className="gap-4 lg:grid-cols-2 xl:grid-cols-3" cols="1">
                        {filesInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No uploaded files to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default FilesInfoPage;