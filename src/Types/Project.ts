
export interface createProjectsI{
    projectName: string;
    description: string;
    img: string;
}

export interface ProjectsI extends createProjectsI{
    id : number;
}