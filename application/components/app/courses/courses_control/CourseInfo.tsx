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
import Course from "../courses/Course";
import addCourseAction from "@/redux/actions/add_actions/addCourseAction";
import { Courses } from "@/redux/types/data";

const CourseInfo = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    const [courseInfo, setCourseInfo] = useState<Courses>({
        title: "",
        description: "",
        videoSrc: "",
        price: "" as any,
    });

    const patterns = {
        videoSrc: /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/g,
    };

    const coursesInfo = state.courses.map((item) => <Course key={item.id} {...item} />);

    function addCourse(): void | false {
        if (!courseInfo.title || !courseInfo.description) {
            toast.error("Course can't be empty !");
            return false;
        }

        if (courseInfo.price < 0 || !patterns.videoSrc.test(courseInfo.videoSrc)) {
            toast.error("Invalid information !");
            return false;
        }

        if (!state.switchBooleans.subscribeControl.isUnlimitedDataEnabled) {
            if (state.courses.length === 10) {
                toast.error("You cannot add more than 10 courses Subscribe to activate unlimited data.");
                return false;
            }
        }

        dispatch(addCourseAction(courseInfo));
        toast.success("Course added successfully !");

        setCourseInfo({
            title: "",
            description: "",
            videoSrc: "",
            price: "" as any,
        });
    }

    return (
        <>
            <BoxContainer className="flex flex-col col-span-3 gap-4">
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Course title"
                    value={courseInfo.title}
                    onChange={(e) => setCourseInfo((prevState) => ({ ...prevState, title: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a Course description"
                    value={courseInfo.description}
                    onChange={(e) => setCourseInfo((prevState) => ({ ...prevState, description: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="text"
                    placeholder="Enter a youtube Course video source"
                    value={courseInfo.videoSrc}
                    onChange={(e) => setCourseInfo((prevState) => ({ ...prevState, videoSrc: e.target.value }))}
                />
                <Input
                    className="w-full"
                    type="number"
                    placeholder="Enter a Price"
                    value={`${courseInfo.price}`}
                    onChange={(e) =>
                        setCourseInfo((prevState) => ({ ...prevState, price: parseFloat(e.target.value) }))
                    }
                />

                <Flex direction="row" items="center" justify="between">
                    <ListLength listName="Courses" listLength={coursesInfo.length} />

                    <Button className="px-2 py-1" onClick={addCourse}>
                        Add course
                    </Button>
                </Flex>
            </BoxContainer>

            <Grid className="col-span-3 gap-4 mt-4" cols="1">
                {state.courses.length > 0 ? (
                    <Grid className="gap-4 xl:grid-cols-2 2xl:grid-cols-3" cols="1">
                        {coursesInfo}
                    </Grid>
                ) : (
                    <BoxContainer className="text-sm font-semibold uppercase">No courses to show !</BoxContainer>
                )}
            </Grid>
        </>
    );
};

export default CourseInfo;
