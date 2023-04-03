import { themeSwitcher } from "@/assests/logic/script";
import BoxContainer from "@/components/app/main/BoxContainer";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Details from "@/components/build/Details";
import Flex from "@/components/build/Flex";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Move from "@/components/build/Move";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const SayHello = () => {
    const state = useSelector<AppState, AppState>((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        themeSwitcher(state.theme);
    }, []);

    useEffect(() => {
        themeSwitcher(state.theme);
    }, [state.theme]);

    return (
        <>
            <Header title="Aissa | Chat Bot - SayHello" />

            <Base>
                <SearchBar />

                <Logo content="SayHello" />

                <BaseWrapper>
                    <BoxContainer className="col-span-3">
                        <Details note="Links">
                            <Flex className="px-4 py-2 gap-2" direction="col">
                                <Move href="/chat-bot" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    Go Back
                                </Move>

                                <Move href="/chat-bot/questions" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    Questions
                                </Move>

                                <Move href="/chat-bot/actions" onClick={() => dispatch(changeLinkAction("chat-bot"))}>
                                    Actions
                                </Move>
                            </Flex>
                        </Details>
                    </BoxContainer>
                </BaseWrapper>

                {state.switchBooleans.websiteControl.isNotificationActive && (
                    <ToastContainer position="top-center" theme={state.theme} />
                )}
            </Base>
        </>
    );
};

export default SayHello;
