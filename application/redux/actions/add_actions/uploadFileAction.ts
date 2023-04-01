import { Files } from "@/redux/types/data";
import { UPLOAD_FILE } from "../../constants/addTypes";
import { AppStateAction } from "../../types/main";

function uploadFileAction(files: Files): AppStateAction {
    return {
        type: UPLOAD_FILE,
        payload: { files },
    };
}

export default uploadFileAction;
