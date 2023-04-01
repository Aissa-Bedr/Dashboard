import { CHANGE_LOGO_APPEARANCE } from "@/redux/constants/changeTypes";
import { Logo } from "@/redux/types/data";
import { AppStateAction } from "@/redux/types/main";

function changeLogoAppearanceAction(logo: Logo): AppStateAction {
    return { type: CHANGE_LOGO_APPEARANCE, payload: { appearance: { logo } } };
}

export default changeLogoAppearanceAction;
