import { getAllProjects } from "./get-all-tasks";

let deleteProject = (id) => {
    const projects = getAllProjects();
    const newProjects = projects.filter(project => project.id != id);

    localStorage.setItem('todoapp-projects', JSON.stringify(newProjects));
};

export {deleteProject};