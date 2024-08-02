let getAllTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('todoapp-tasks') || "[]");

    return tasks;
}

export {getAllTasks}