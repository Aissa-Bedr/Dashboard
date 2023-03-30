import { fileSizeType, FileType } from "./app";

export interface LatestUploadsInfoItemProps {
    id?: number;
    fileName: string;
    fileType: FileType;
    fileUploader: string;
    fileSize: number;
    fileSizeType: fileSizeType;
}
