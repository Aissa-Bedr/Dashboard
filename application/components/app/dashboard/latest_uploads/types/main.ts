import { fileSizeType, FileType } from "./app";

export interface LatestUploadsInfoItemProps {
    id?: string;
    fileName: string;
    fileType: FileType;
    fileUploader: string;
    fileSize: number;
    fileSizeType: fileSizeType;
}
