import React, { FC } from "react";
import BoxContainer from "../../main/BoxContainer";
import { BusinessProjectProps } from "../types/main";
import Flex from "@/components/build/Flex";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { statusTypes } from "../../dashboard/projects/ProjectsInfoItem";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import removeBusinessProjectAction from "@/redux/actions/remove_actions/removeBusinessProjectAction";

const BusinessProject: FC<BusinessProjectProps> = ({
    id,
    name,
    finishDate,
    description,
    price,
    team,
    status,
    keyWord,
}) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeBusinessProject(): void {
        dispatch(removeBusinessProjectAction(id!));
        toast.warning("Business Project removed successfully !");
    }

    return (
        <BoxContainer>
            <Flex className="gap-4" direction="col">
                <Flex direction="row" items="center" justify="between">
                    <p className="text-lg font-medium">{name}</p>

                    <p className="text-sm font-semibold uppercase text-grey-color dark:text-grey-dark-color">
                        {finishDate}
                    </p>
                </Flex>

                <p className="font-medium duration-300 text-grey-color dark:text-grey-dark-color">{description}</p>

                <p className="text-grey-color dark:text-grey-dark-color">
                    {team} Member{team > 1 ? "s" : ""}
                </p>

                <Flex className="py-2 __border_y" direction="row" items="end" justify="end">
                    <p
                        className={classNames(
                            "text-center bg-grey-alt-color text-black dark:bg-grey-dark-alt-color dark:text-grey-dark-color px-2 py-1.5 text-sm font-semibold",
                            { "rounded-md": state.switchBooleans.uiControl.isRounded }
                        )}
                    >
                        {keyWord}
                    </p>
                </Flex>

                <Flex direction="row" items="center" justify="between">
                    <Flex className="gap-2" direction="row" items="center">
                        <FiTrash2
                            className="cursor-pointer dark:text-grey-dark-color hover:!text-red-color duration-300"
                            onClick={removeBusinessProject}
                        />

                        <div className={classNames("w-6 h-6 rounded-full", { [statusTypes[status]]: status })}></div>
                    </Flex>

                    <div className="text-grey-color dark:text-grey-dark-color">${price}</div>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default BusinessProject;
