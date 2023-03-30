import { themeSwitcher } from "@/assests/logic/script";
import Welcome from "@/components/app/dashboard/welcome/Welcome";
import GeneralInfo from "@/components/app/settings/general_info/GeneralInfo";
import UserInfo from "@/components/app/settings/user_info/UserInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Flex from "@/components/build/Flex";
import Grid from "@/components/build/Grid";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Move from "@/components/build/Move";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { Theme } from "@/redux/types/app";
import { AppState, AppStateAction } from "@/redux/types/main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const WelcomePage = () => {
    const theme = useSelector<AppState, Theme>((state) => state.theme);
    const dispatch: Dispatch<AppStateAction> = useDispatch();

    useEffect(() => {
        themeSwitcher(theme);
    }, []);

    useEffect(() => {
        themeSwitcher(theme);
    }, [theme]);

    return (
        <>
            <Header title="Aissa | Dashboard - Welcome" />

            <Base>
                <SearchBar />

                <Logo content="welcome" />

                <BaseWrapper>
                    <Move
                        href="/"
                        onClick={() =>
                            dispatch({ type: "changeLink", payload: { links: { currentLinkValue: "dashboard" } } })
                        }
                    >
                        Go back
                    </Move>

                    <Flex className="!col-span-3 gap-4" direction="col">
                        <Welcome dontIncludeShowMoreLink />

                        <Grid className="gap-4 lg:grid-cols-2" cols="1">
                            <GeneralInfo />
                            <UserInfo />
                        </Grid>
                    </Flex>
                </BaseWrapper>
            </Base>
        </>
    );
};

export default WelcomePage;
