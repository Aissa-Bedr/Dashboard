import { TOGGLE_THEME } from "../../constants/toggleTypes";
import { AppStateAction } from "../../types/main";

function toggleThemeAction(): AppStateAction {
    return { type: TOGGLE_THEME };
}

export default toggleThemeAction;
