import { themeSwitcher } from "@/assests/logic/script";
import PlansInfo from "@/components/app/plans/plans_info/PlansInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { Theme } from "@/redux/types/app";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Plans = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Plans" />

            <Base>
                <SearchBar />

                <Logo content="plans" />

                <BaseWrapper>
                    <PlansInfo />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default Plans;
