import Flex from "@/components/build/Flex";
import { AppState } from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import Select from "@/components/build/Select";
import EachProject from "./EachProject";
import { StatusTypes } from "@/components/app/dashboard/projects/types/main";
import { Projects } from "@/redux/types/data";
import addProjectAction from "@/redux/actions/add_actions/addProjectAction";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";
import { initialProjectsState, patterns } from "@/components/app/dashboard/projects/ProjectsInfo";
import { ProjectOptions } from "./types/main";
import { Filterkey } from "./types/app";

const ProjectsInfoPage = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [projectInfo, setProjectInfo] = useState<Projects>(initialProjectsState);
    const [projectOptions, setProjectOptions] = useState<ProjectOptions>({
        filterKey: "projectName",
        filterValue: "",
    });

    const projectsInfo = state.projects
        .filter((project) =>
            projectOptions.filterKey === "projectName"
                ? project.name.includes(projectOptions.filterValue)
                : project.status === projectOptions.filterValue
        )
        .map((item) => <EachProject key={item.id} {...item} />);

    function addProject(): void | false {
        if (!projectInfo.name || !projectInfo.finishDate || !projectInfo.client) {
            toast.error("Project can't be empty !");
            dispatch(pushNotificationAction("Project can't be empty."));
            return false;
        }

        if (projectInfo.price < 0 || projectInfo.team < 1 || !patterns.finishDate.test(projectInfo.finishDate)) {
            toast.error("Invalid Project information !");
            dispatch(pushNotificationAction("Invalid Project information."));
            return false;
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.projects.length >= 10) {
                toast.error("You cannot add more than 10 projects Projects Subscribe to activate unlimited data.");
                dispatch(
                    pushNotificationAction(
                        "You cannot add more than 10 projects Projects Subscribe to activate unlimited data."
                    )
                );
                return false;
            }
        }

        dispatch(addProjectAction(projectInfo));
        toast.success("Project added successfully !");
        dispatch(pushNotificationAction("Project added successfully."));

        setProjectInfo(initialProjectsState);
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Project Name"
                    value={projectInfo.name}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, name: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="dd mm yy"
                    value={projectInfo.finishDate}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, finishDate: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Client"
                    value={projectInfo.client}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, client: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="number"
                    placeholder="Enter a Price"
                    value={`${projectInfo.price}`}
                    onChange={(e) =>
                        setProjectInfo((prevState) => ({ ...prevState, price: parseFloat(e.target.value) }))
                    }
                />
                <Input
                    className="w-full"
                    type="number"
                    placeholder="Enter Number of members"
                    value={`${projectInfo.team}`}
                    onChange={(e) => setProjectInfo((prevState) => ({ ...prevState, team: parseInt(e.target.value) }))}
                />
                <Select
                    className="w-full"
                    value={projectInfo.status}
                    onChange={(e) =>
                        setProjectInfo((prevState) => ({ ...prevState, status: e.target.value as keyof StatusTypes }))
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

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Projects" listLength={projectsInfo.length} />

                    <Button className="px-2 py-1" onClick={addProject}>
                        Add project
                    </Button>
                </Flex>
            </BoxContainer>

            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Select
                    className="w-full"
                    value={projectOptions.filterKey}
                    onChange={(e) =>
                        setProjectOptions((prevState) => ({ filterKey: e.target.value as Filterkey, filterValue: "" }))
                    }
                >
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="projectName"
                    >
                        Project Name
                    </option>
                    <option
                        className="text-black bg-grey-alt-color dark:bg-grey-dark-alt-color dark:text-white"
                        value="projectStatus"
                    >
                        Status
                    </option>
                </Select>

                {projectOptions.filterKey === "projectName" ? (
                    <Input
                        className="w-full"
                        type="text"
                        placeholder="Enter a Project Name"
                        value={projectOptions.filterValue}
                        onChange={(e) =>
                            setProjectOptions((prevState) => ({
                                ...prevState,
                                filterValue: e.target.value,
                            }))
                        }
                    />
                ) : (
                    <Select
                        className="w-full"
                        value={projectOptions.filterValue}
                        onChange={(e) =>
                            setProjectOptions((prevState) => ({ ...prevState, filterValue: e.target.value }))
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
                )}
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.projects.length > 0 ? (
                    <BoxContainer className="overflow-x-auto">
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
                    </BoxContainer>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No projects to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default ProjectsInfoPage;
