import Flex from "@/components/build/Flex";
import {
    AppState,
    AppStateAction,
    BusinessProjects,
    Files,
    Projects,
    Reminders,
    SwitchBooleans,
} from "@/redux/types/main";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/build/Input";
import Button from "@/components/build/Button";
import Grid from "@/components/build/Grid";
import BoxContainer from "@/components/app/main/BoxContainer";
import ListLength from "@/components/build/ListLength";
import Select from "@/components/build/Select";
import { StatusTypes } from "@/components/app/dashboard/projects/types/main";
import BusinessProject from "../business_projects/BusinessProject";

const BusinessProjectsInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const switchBooleans = useSelector<AppState, SwitchBooleans>((state) => state.switchBooleans);
    const dispatch: Dispatch<AppStateAction> = useDispatch();
    const [businessProjectInfo, setBusinessProjectInfo] = useState<BusinessProjects>({
        name: "",
        description: "",
        finishDate: "",
        price: "" as any,
        team: "" as any,
        keyWord: "",
        status: "pending",
    });

    const patterns = {
        finishDate: /\d{1,2}\W\w{1,}\W\d{4}/g,
    };

    const businessProjectsInfo = state.businessProjects.map((item) => <BusinessProject key={item.id} {...item} />);

    function addBusinessProject(): void | false {
        if (!businessProjectInfo.name || !businessProjectInfo.finishDate || !businessProjectInfo.description) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Business Project can't be empty !`, { position: "top-center", theme: state.theme });
            return false;
        }

        if (
            businessProjectInfo.price < 0 ||
            businessProjectInfo.team < 1 ||
            !patterns.finishDate.test(businessProjectInfo.finishDate)
        ) {
            switchBooleans.websiteControl.isNotificationActive &&
                toast.error(`Invalid information please try again later !`, {
                    position: "top-center",
                    theme: state.theme,
                });
            return false;
        }

        dispatch({ type: "addBusinessProject", payload: { businessProjects: businessProjectInfo } });
        switchBooleans.websiteControl.isNotificationActive &&
            toast.success(`Business Project added successfully !`, { position: "top-center", theme: state.theme });
        setBusinessProjectInfo({
            name: "",
            finishDate: "",
            description: "",
            price: "" as any,
            team: "" as any,
            keyWord: "",
            status: "pending",
        });
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Business Project Name"
                    value={businessProjectInfo.name}
                    onChange={(e) => setBusinessProjectInfo((prevState) => ({ ...prevState, name: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="dd mm yy"
                    value={businessProjectInfo.finishDate}
                    onChange={(e) =>
                        setBusinessProjectInfo((prevState) => ({ ...prevState, finishDate: e.target.value }))
                    }
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Description"
                    value={businessProjectInfo.description}
                    onChange={(e) =>
                        setBusinessProjectInfo((prevState) => ({ ...prevState, description: e.target.value }))
                    }
                />
                <Input
                    className="w-full"
                    type="number"
                    placeholder="Enter a Price"
                    value={`${businessProjectInfo.price}`}
                    onChange={(e) =>
                        setBusinessProjectInfo((prevState) => ({ ...prevState, price: parseFloat(e.target.value) }))
                    }
                />
                <Input
                    className="w-full"
                    type="number"
                    placeholder="Enter Number of members"
                    value={`${businessProjectInfo.team}`}
                    onChange={(e) =>
                        setBusinessProjectInfo((prevState) => ({ ...prevState, team: parseInt(e.target.value) }))
                    }
                />
                <Input
                    className="w-full"
                    type="string"
                    placeholder="Enter a KeyWord"
                    value={businessProjectInfo.keyWord}
                    onChange={(e) => setBusinessProjectInfo((prevState) => ({ ...prevState, keyWord: e.target.value }))}
                />
                <Select
                    className="w-full"
                    value={businessProjectInfo.status}
                    onChange={(e) =>
                        setBusinessProjectInfo((prevState) => ({
                            ...prevState,
                            status: e.target.value as keyof StatusTypes,
                        }))
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
                    <ListLength listName="Business Projects" listLength={businessProjectsInfo.length} />

                    <Button className="px-2 py-1" onClick={addBusinessProject}>
                        Add project
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.businessProjects.length > 0 ? (
                    <Grid className="gap-4 lg:grid-cols-2 xl:grid-cols-3" cols="1">
                        {businessProjectsInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">
                        No business projects to show !
                    </BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default BusinessProjectsInfo;
