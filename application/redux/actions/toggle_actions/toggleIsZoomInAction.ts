import { TOGGLE_IS_ZOOM_IN } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsZoomInAction(): AppStateAction {
    return { type: TOGGLE_IS_ZOOM_IN };
}

export default toggleIsZoomInAction;
