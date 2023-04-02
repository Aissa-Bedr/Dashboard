import { AppState } from "@/redux/types/main";
import { legacy_createStore } from "redux";
import { initialState } from "./state";
import reducer from "./reducer";
import { devToolsEnhancer, EnhancerOptions } from "@redux-devtools/extension";

const appState: AppState =
    typeof window !== "undefined" && localStorage.getItem("appState")
        ? JSON.parse(`${localStorage.getItem("appState")}`)
        : initialState;

const store = legacy_createStore(reducer, devToolsEnhancer(appState as EnhancerOptions));

store.subscribe(() => {
    localStorage.setItem("appState", JSON.stringify(store.getState()));
});

export default store;
