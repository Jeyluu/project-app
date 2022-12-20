export enum ProjectState {
    ToBeDone = 0,
    InProgress,
    Done
}


export interface ProjectsI{
    id : number;
    projectName: string;
    description: string;
    state: ProjectState;
    img: string;
}