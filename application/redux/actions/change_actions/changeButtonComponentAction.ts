import { ButtonComponentSwitchType } from "@/components/app/settings/components_shapes_control/controls/types/app";
import { CHANGE_BUTTON_COMPONENT } from "@/redux/constants/changeTypes";
import { AppStateAction } from "@/redux/types/main";

function changeButtonComponentAction(type: ButtonComponentSwitchType): AppStateAction {
    return { type: CHANGE_BUTTON_COMPONENT, payload: { components: { button: { type } } } };
}

export default changeButtonComponentAction;
