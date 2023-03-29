import { AppState } from "@/redux/types/main";
import { legacy_createStore } from "redux";
import reducer, { initialState } from "./reducer";

const appState: AppState =
    typeof window !== "undefined" && localStorage.getItem("appState")
        ? JSON.parse(`${localStorage.getItem("appState")}`)
        : initialState;

const store = legacy_createStore(reducer, appState);

store.subscribe(() => {
    localStorage.setItem("appState", JSON.stringify(store.getState()));
});

export default store;
