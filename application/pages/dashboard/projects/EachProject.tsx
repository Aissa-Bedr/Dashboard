import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProjectsInfoItemProps, StatusTypes } from "@/components/app/dashboard/projects/types/main";
import removeProjectAction from "@/redux/actions/remove_actions/removeProjectAction";

const EachProject: FC<ProjectsInfoItemProps> = ({ id, name, finishDate, client, price, team, status }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const statusTypes: StatusTypes = {
        pending: "bg-orange-color",
        "in progress": "bg-blue-color dark:bg-blue-dark-color",
        completed: "bg-green-color",
        rejected: "bg-red-color",
    };

    function removeProject(): void {
        dispatch(removeProjectAction(id!));
        state.switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Project removed successfully !`, { position: "top-center", theme: state.theme });
    }

    return (
        <tr className="duration-300 hover:bg-[#f1f5f9] dark:hover:bg-[#1a1d21]">
            <td className="capitalize __table_element">{name}</td>
            <td className="__table_element">{finishDate}</td>
            <td className="capitalize __table_element">{client}</td>
            <td className="__table_element">${price}</td>
            <td className="__table_element">
                {team} People{team >= 2 && "s"}
            </td>
            <td className="__table_element border-r-[1px] border-r-grey-alt-color dark:border-r-grey-dark-alt-color">
                <Flex direction="row" items="center" justify="between">
                    <div
                        className={classNames("w-fit py-1 px-2 text-white", {
                            [statusTypes[status]]: status,
                            "rounded-md": state.switchBooleans.uiControl.isRounded,
                        })}
                    >
                        {status}
                    </div>

                    <button
                        className={classNames(
                            "py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white duration-300",
                            { "rounded-md": state.switchBooleans.uiControl.isRounded }
                        )}
                        onClick={removeProject}
                    >
                        Remove
                    </button>
                </Flex>
            </td>
        </tr>
    );
};

export default EachProject;
