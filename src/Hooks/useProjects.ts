import { useEffect, useState } from "react";
import { getProjects } from "../Services/Project";
import { ProjectsI } from "../Types/Project";

export function useProjects(){
    const  [projects, setProjects] = useState<ProjectsI[]>([]);
    useEffect(() => {
        getProjects()
        .then(projects => setProjects(projects))
        .catch((error) => console.error(error))
    },[])
    return projects
}