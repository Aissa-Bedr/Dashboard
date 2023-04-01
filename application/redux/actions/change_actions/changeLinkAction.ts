import { AppStateAction } from "../../types/main";
import { CHANGE_LINK } from "../../constants/changeTypes";
import { LinkProps } from "@/components/helpers/nav/types/app";

function changeLinkAction(currentLinkValue: LinkProps): AppStateAction {
    return {
        type: CHANGE_LINK,
        payload: { links: { currentLinkValue } },
    };
}

export default changeLinkAction;
