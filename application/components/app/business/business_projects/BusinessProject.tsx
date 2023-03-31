import React, { FC } from "react";
import BoxContainer from "../../main/BoxContainer";
import { BusinessProjectProps } from "../types/main";
import Flex from "@/components/build/Flex";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppStateAction, SwitchBooleans } from "@/redux/types/main";
import { statusTypes } from "../../dashboard/projects/ProjectsInfoItem";
import { FiTrash2 } from "react-icons/fi";
import { Theme } from "@/redux/types/app";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecondaryLogo from "../../main/SecondaryLogo";

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
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    function removeBusinessProject(): void {
        dispatch({ type: "removeBusinessProject", payload: { businessProjects: { id } } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.warning(`Business Project removed successfully !`, { position: "top-center", theme });
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
                            { "rounded-md": switchBooleans.uiControl.isRounded }
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

                    <div className="text-grey-color dark:text-grey-dark-color">$ {price}</div>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default BusinessProject;
