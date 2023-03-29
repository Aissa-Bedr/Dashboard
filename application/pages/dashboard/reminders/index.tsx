import { themeSwitcher } from "@/assests/logic/script";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Flex from "@/components/build/Flex";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Move from "@/components/build/Move";
import { Theme } from "@/redux/types/app";
import { AppState, AppStateAction } from "@/redux/types/main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import RemindersInfoPage from "./RemindersInfoPage";

const RemindersPage = () => {
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
            <Header title="Aissa | Dashboard - Reminders" />

            <Base>
                <Logo content="reminders" />

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
                        <RemindersInfoPage />
                    </Flex>
                </BaseWrapper>
            </Base>
        </>
    );
};

export default RemindersPage;