import { themeSwitcher } from "@/assests/logic/script";
import CourseInfo from "@/components/app/courses/courses_control/CourseInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Courses = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, []);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, [state.theme]);

    return (
        <>
            <Header title="Aissa | Courses" />

            <Base>
                <SearchBar />

                <Logo content="courses" />

                <BaseWrapper>
                    <CourseInfo />
                </BaseWrapper>

                {state.switchBooleans.websiteControl.isNotificationActive && (
                    <ToastContainer position="top-center" theme={state.theme} />
                )}
            </Base>
        </>
    );
};

export default Courses;
