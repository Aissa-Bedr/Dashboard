import { themeSwitcher } from "@/assests/logic/script";
import CourseInfo from "@/components/app/courses/courses_control/CourseInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { Theme } from "@/redux/types/app";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Courses = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Courses" />

            <Base>
                <SearchBar />

                <Logo content="courses" />

                <BaseWrapper>
                    <CourseInfo />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Courses;
