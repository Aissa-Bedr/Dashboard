import { TOGGLE_IS_TICKETS_STATISTICS_ACTIVE } from "@/redux/constants/toggleTypes";
import { AppStateAction } from "@/redux/types/main";

function toggleIsStatisticsActiveAction(): AppStateAction {
    return { type: TOGGLE_IS_TICKETS_STATISTICS_ACTIVE };
}

export default toggleIsStatisticsActiveAction;
