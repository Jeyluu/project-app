
export interface CreateProjectsI{
    projectName: string;
    description: string;
    img: string;
}

export interface ProjectsI extends CreateProjectsI{
    id : number;
}