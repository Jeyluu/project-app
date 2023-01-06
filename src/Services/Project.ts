import { ProjectsI, CreateProjectsI } from "../Types/Project";

export function getProjects() : Promise<ProjectsI[]> {
    return fetch('http://localhost:3500/projects').then((response) => response.json())
}

export function createProject(project: CreateProjectsI) : Promise<ProjectsI> {
    return fetch('http://localhost:3500/projects', {
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(project)
    }).then((response) => response.json())
}