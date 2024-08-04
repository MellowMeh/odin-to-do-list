import { getAllProjects } from "./get-all-projects";

let updateProjects = (projectToUpdate) => {
    const projects = getAllTasks();
    const existingProject = projects.find(project => project.id == projectToUpdate.id);

    if (existingProject) {
        existingProject.title = projectToUpdate.title,
        existingProject.description = projectToUpdate.description,
        existingProject.dueDate = projectToUpdate.dueDate,
        existingProject.priority = projectToUpdate.priority,
        existingProject.project = projectToUpdate.project,
        existingProject.section = projectToUpdate.section,
        existingProject.id = projectToUpdate.id
    } else {
        projectToUpdate.id = Math.floor(Math.random() * 100);
        projects.push(projectToUpdate);
    }

    localStorage.setItem('todoapp-projects', JSON.stringify(projects));
};

export {updateProjects};