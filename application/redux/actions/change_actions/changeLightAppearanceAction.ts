import { CHANGE_LIGHT_APPEARANCE } from "@/redux/constants/changeTypes";
import { LightApperanceType } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeLightAppearanceAction(light: LightApperanceType): AppStateAction {
    return { type: CHANGE_LIGHT_APPEARANCE, payload: { appearance: { light } } };
}

export default changeLightAppearanceAction;
