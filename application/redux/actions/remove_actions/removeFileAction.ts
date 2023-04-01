import { REMOVE_FILE } from "@/redux/constants/removeTypes";
import { AppStateAction } from "@/redux/types/main";

function removeFileAction(id: string): AppStateAction {
    return {
        type: REMOVE_FILE,
        payload: { files: { id } },
    };
}

export default removeFileAction;
