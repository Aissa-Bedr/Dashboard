import Flex from "@/components/build/Flex";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { FC } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsInfoItemProps, StatusTypes } from "./types/main";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch } from "redux";
import { Theme } from "@/redux/types/app";

const ProjectsInfoItem: FC<ProjectsInfoItemProps> = ({ id, name, finishDate, client, price, team, status }) => {
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    const statusTypes: StatusTypes = {
        pending: "bg-orange-color",
        "in progress": "bg-blue-color dark:bg-blue-dark-color",
        completed: "bg-green-color",
        rejected: "bg-red-color",
    };

    function removeProject(): void {
        dispatch({ type: "removeProject", payload: { projects: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Project removed successfully !`, { position: "top-center", theme });
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
                            "rounded-md": switchBooleans.uiControl.isRounded,
                        })}
                    >
                        {status}
                    </div>

                    <FiTrash2
                        className="cursor-pointer dark:text-grey-dark-color hover:!text-red-color duration-300"
                        onClick={removeProject}
                    />
                </Flex>
            </td>
        </tr>
    );
};

export default ProjectsInfoItem;
