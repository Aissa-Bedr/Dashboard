import { CHANGE_DARK_APPEARANCE } from "@/redux/constants/changeTypes";
import { DarkApperanceType } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeDarkAppearanceAction(dark: DarkApperanceType): AppStateAction {
    return { type: CHANGE_DARK_APPEARANCE, payload: { appearance: { dark } } };
}

export default changeDarkAppearanceAction;
