import { SwitchType } from "@/components/app/settings/components_shapes_control/controls/types/app";
import { CHANGE_SWITCH_BUTTON_COMPONENT } from "@/redux/constants/changeTypes";
import { AppStateAction } from "@/redux/types/main";

function changeSwitchButtonComponentAction(type: SwitchType): AppStateAction {
    return { type: CHANGE_SWITCH_BUTTON_COMPONENT, payload: { components: { switchButton: { type } } } };
}

export default changeSwitchButtonComponentAction;
