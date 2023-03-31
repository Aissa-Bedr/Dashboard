import { ProjectsInfoItemProps } from "../../dashboard/projects/types/main";

export interface BusinessProjectProps extends Omit<ProjectsInfoItemProps, "client"> {
    description: string;
    keyWord: string;
}
