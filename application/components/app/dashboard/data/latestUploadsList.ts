import { LatestUploadsInfoItemProps } from "./../latest_uploads/types/main";

const latestUploadsList: LatestUploadsInfoItemProps[] = [
    { id: 0, src: "/dashboard/pdf.svg", fileName: "my-file.pdf", fileUploader: "Elzero", fileSize: 2.9 },
    { id: 1, src: "/dashboard/avi.svg", fileName: "my-video-file.avi", fileUploader: "Admin", fileSize: 4.9 },
    { id: 2, src: "/dashboard/psd.svg", fileName: "my-psd-file.psd", fileUploader: "Osama", fileSize: 4.5 },
    { id: 3, src: "/dashboard/zip.svg", fileName: "my-zip-file.zip", fileUploader: "User", fileSize: 8.9 },
    { id: 4, src: "/dashboard/dll.svg", fileName: "my-dll-file.dll", fileUploader: "Aissa", fileSize: 3 },
    {
        id: 5,
        src: "/dashboard/eps.svg",
        fileName: "my-eps-file.eps",
        fileUploader: "Anonymous",
        fileSize: 1.2,
        dontIncludeBorder: true,
    },
];

export default latestUploadsList;
