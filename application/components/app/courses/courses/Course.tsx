import React, { FC } from "react";
import BoxContainer from "../../main/BoxContainer";
import { CourseProps } from "../types/main";
import Flex from "@/components/build/Flex";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/redux/types/main";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import removeCourseAction from "@/redux/actions/remove_actions/removeCourseAction";
import toggleIsLikedCourseAction from "@/redux/actions/toggle_actions/toggleIsLikedCourse";
import pushNotificationAction from "@/redux/actions/add_actions/pushNotificationAction";

const Course: FC<CourseProps> = ({ id, title, description, videoSrc, price, isLiked }) => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    function removeCourse(): void {
        dispatch(removeCourseAction(id!));
        toast.warning("Course removed successfully !");
        dispatch(pushNotificationAction("Course removed successfully."));
    }

    function toggleCourseLike(): void {
        dispatch(toggleIsLikedCourseAction(id!));
        toast.success(isLiked ? "Course unliked successfully !" : "Course liked successfully !");
        dispatch(pushNotificationAction(isLiked ? "Course unliked successfully." : "Course liked successfully."));
    }

    return (
        <BoxContainer>
            <Flex className="gap-4" direction="col">
                <Image src={`/${state.appearance.logo.src}`} alt="logo" width={50} height={50} />

                <Flex className="gap-2" direction="col">
                    <p className="text-lg font-medium duration-300">{title}</p>

                    <p className="text-sm font-semibold duration-300 text-grey-color dark:text-grey-dark-color">
                        {description}
                    </p>
                </Flex>

                <Flex className="py-2 __border_y" direction="row" items="end" justify="end">
                    <a
                        className={classNames("capitalize text-sm py-1 px-2 text-white duration-300", {
                            "rounded-md": state.switchBooleans.uiControl.isRounded,
                            "bg-pink-500 hover:bg-pink-600 active:bg-pink-700": isLiked,
                            "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:!bg-blue-dark-color": !isLiked,
                        })}
                        href={videoSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check it
                    </a>
                </Flex>

                <Flex direction="row" items="center" justify="between">
                    <Flex className="gap-2" direction="row" items="center">
                        <FiTrash2
                            className="cursor-pointer text-grey-color dark:text-grey-dark-color hover:!text-red-color duration-300"
                            onClick={removeCourse}
                        />

                        <AiOutlineHeart
                            className={classNames("duration-300 cursor-pointer", {
                                "text-pink-500": isLiked,
                                "text-grey-color dark:text-grey-dark-color hover:!text-pink-500": !isLiked,
                            })}
                            size="1.3rem"
                            onClick={toggleCourseLike}
                        />
                    </Flex>

                    <div className="text-grey-color dark:text-grey-dark-color">${price}</div>
                </Flex>
            </Flex>
        </BoxContainer>
    );
};

export default Course;
