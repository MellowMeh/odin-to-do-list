let getAllProjects = () => {
    const tasks = JSON.parse(localStorage.getItem('todoapp-projects') || "[]");

    return tasks;
}

export {getAllProjects}