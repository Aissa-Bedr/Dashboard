import { themeSwitcher } from "@/assests/logic/script";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Move from "@/components/build/Move";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { Theme } from "@/redux/types/app";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemindersInfoPage from "./RemindersInfoPage";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";

const RemindersPage = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Dashboard - Reminders" />

            <Base>
                <SearchBar />

                <Logo content="reminders" />

                <BaseWrapper>
                    <Move href="/" onClick={() => dispatch(changeLinkAction("dashboard"))}>
                        Go back
                    </Move>

                    <RemindersInfoPage />
                </BaseWrapper>
            </Base>
        </>
    );
};

export default RemindersPage;
