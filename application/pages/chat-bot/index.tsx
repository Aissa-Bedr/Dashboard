import { themeSwitcher } from "@/assests/logic/script";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const ChatBot = () => {
    const state = useSelector<AppState, AppState>((state) => state);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, []);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, [state.theme]);

    return (
        <>
            <Header title="Aissa | Chat Bot" />

            <Base>
                <SearchBar />

                <Logo content="Chat bot" />

                <BaseWrapper>
                    <p>Hello Chat Bot !</p>
                </BaseWrapper>

                {state.switchBooleans.websiteControl.isNotificationActive && (
                    <ToastContainer position="top-center" theme={state.theme} />
                )}
            </Base>
        </>
    );
};

export default ChatBot;
