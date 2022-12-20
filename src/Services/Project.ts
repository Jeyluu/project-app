import { ProjectsI } from "../Types/Project";

export function getProjects() : Promise<ProjectsI[]> {
    return fetch('http://localhost:3500/projects').then((response) => response.json())
}