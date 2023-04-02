import Flex from "@/components/build/Flex";
import NewNav from "@/components/helpers/new_nav/NewNav";
import store from "@/redux/store";
import "@/styles/globals.css";
import "@/styles/tailwind_classes.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = dynamic(() => import("@/components/build/Container"), { ssr: false });
const Nav = dynamic(() => import("@/components/helpers/nav/Nav"), { ssr: false });
const Section = dynamic(() => import("@/components/helpers/section/Section"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (router.pathname === "/_error") return <Component {...pageProps} />;

    return (
        <Provider store={store}>
            <Container>
                <Flex className="w-full" direction="row">
                    <Nav />
                    <Flex className="w-full !overflow-hidden box-border" direction="col">
                        <Section />
                        <Component {...pageProps} />
                    </Flex>
                </Flex>

                <NewNav />
                {store.getState().switchBooleans.websiteControl.isNotificationActive && (
                    <ToastContainer position="top-center" theme={store.getState().theme} />
                )}
            </Container>
        </Provider>
    );
}
