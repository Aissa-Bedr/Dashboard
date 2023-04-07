import { Options } from "../../types/main";
import { FilterKey } from "./app";

export interface TaskOptions extends Options<FilterKey> {
    content: string;
}
