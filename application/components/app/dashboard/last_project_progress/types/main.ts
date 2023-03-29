import { Status } from "./app";

export interface StatusTypes {
    "in progress": string;
    pending: string;
    completed: string;
    rejected: string;
}

export interface LastProjectProgressInfoItemProps {
    id?: number;
    title: string;
    status: Status;
}
