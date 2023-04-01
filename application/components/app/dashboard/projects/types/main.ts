import { Status } from "../../last_project_progress/types/app";

export interface StatusTypes {
    pending: string;
    "in progress": string;
    completed: string;
    rejected: string;
}

export interface ProjectsInfoItemProps {
    id?: string;
    name: string;
    finishDate: string;
    client: string;
    price: number;
    team: number;
    status: Status;
}
