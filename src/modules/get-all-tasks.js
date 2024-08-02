let getAllTasks = () => {
    const notes = JSON.parse(localStorage.getItem('todoapp-tasks') || "[]");

    return notes;
}

export {getAllTasks}