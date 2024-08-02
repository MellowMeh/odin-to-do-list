import { getAllTasks } from "./get-all-tasks";

let deleteTask = (id) => {
    const tasks = getAllTasks();
    const newTasks = tasks.filter(task => task.id != id);

    localStorage.setItem('todoapp-tasks', JSON.stringify(newTasks));
};

export {deleteTask};