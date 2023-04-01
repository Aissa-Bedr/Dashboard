import { SwitchType } from "@/components/app/settings/components_shapes_control/controls/types/app";
import { CHANGE_INPUT_FIELD_COMPONENT } from "@/redux/constants/changeTypes";
import { AppStateAction } from "@/redux/types/main";

function changeInputFieldComponentAction(type: SwitchType): AppStateAction {
    return { type: CHANGE_INPUT_FIELD_COMPONENT, payload: { components: { inputField: { type } } } };
}

export default changeInputFieldComponentAction;
