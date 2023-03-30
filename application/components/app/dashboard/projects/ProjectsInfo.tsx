import Button from "@/components/build/Button";
import Flex from "@/components/build/Flex";
import Grid from "@/components/build/Grid";
import Input from "@/components/build/Input";
import { AppState, AppStateAction, Projects, SwitchBooleans } from "@/redux/types/main";
import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../last_project_progress/types/app";
import ProjectsInfoItem from "./ProjectsInfoItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch } from "redux";
import Select from "@/components/build/Select";

const ProjectsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [projectInfo, setProjectInfo] = useState<Projects>({
        name: "",
        finishDate: "",
        client: "",
        price: "" as any,
        team: "" as any,
        status: "pending",
    });

    const patterns = {
        finishDate: /\d{1,2}\W\w{1,}\W\d{4}/g,
    };

    const projectsInfo = state.projects.map((item) => <ProjectsInfoItem key={item.id} {...item} />);

    function addProject(): void | false {
        if (!projectInfo.name || !projectInfo.finishDate || !projectInfo.client) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Project can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        if (projectInfo.price < 0 || projectInfo.team < 1 || !patterns.finishDate.test(projectInfo.finishDate)) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Invalid information please try again later !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        dispatch({ type: "addProject", payload: { projects: projectInfo } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Project added successfully !`, { position: "top-center", theme: state.theme });
        setProjectInfo({ name: "", finishDate: "", client: "", price: "" as any, team: "" as any, status: "pending" });
    }

    return (
        <Flex className="gap-2" direction="col">
            <Grid className="gap-2" cols="3">
                <Input
                    className="col-span-3 lg:col-span-1"
                    type="text"
                    placeholder="Enter a Name"
                    value={projectInfo.name}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, name: e.target.value }))}
                />
                <Input
                    className="col-span-3 lg:col-span-1"
                    type="text"
                    placeholder="dd mm yy"
                    value={projectInfo.finishDate}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, finishDate: e.target.value }))}
                />
                <Input
                    className="col-span-3 lg:col-span-1"
                    type="text"
                    placeholder="Enter a Client"
                    value={projectInfo.client}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, client: e.target.value }))}
                />
                <Input
                    className="col-span-3 lg:col-span-1"
                    type="number"
                    placeholder="Enter a Price"
                    value={`${projectInfo.price}`}
                    onChange={(e) =>
                        setProjectInfo((prevState) => ({ ...prevState, price: parseFloat(e.target.value) }))
                    }
                />
                <Input
                    className="col-span-3 lg:col-span-1"
                    type="number"
                    placeholder="Enter Number of members"
                    value={`${projectInfo.team}`}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, team: parseInt(e.target.value) }))}
                />
                <Select
                    className="col-span-3 lg:col-span-1"
                    value={projectInfo.status}
                    onChange={(e) =>
                        setProjectInfo((prevState) => ({ ...prevState, status: e.target.value as Status }))
                    }
                >
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="pending"
                    >
                        pending
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="in progress"
                    >
                        in progress
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="completed"
                    >
                        completed
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="rejected"
                    >
                        rejected
                    </option>
                </Select>
                <Button className="col-span-3" onClick={addProject}>
                    Add project
                </Button>
            </Grid>

            <div className="overflow-x-auto">
                {state.projects.length >= 1 ? (
                    <table className="min-w-[1000px] w-full mb-2 xl:m-0">
                        <thead className="duration-300 bg-grey-alt-color dark:bg-grey-dark-alt-color">
                            <tr className="font-bold">
                                <td className="p-4">Name</td>
                                <td className="p-4">Finish date</td>
                                <td className="p-4">Client</td>
                                <td className="p-4">Price</td>
                                <td className="p-4">Team</td>
                                <td className="p-4">Status</td>
                            </tr>
                        </thead>
                        <tbody>{projectsInfo}</tbody>
                    </table>
                ) : (
                    <div
                        className={classNames("__data_list_empty", {
                            "rounded-md": switchBooleans.uiControl.isRounded,
                        })}
                    >
                        No projects to show !
                    </div>
                )}
            </div>
        </Flex>
    );
};

export default ProjectsInfo;
