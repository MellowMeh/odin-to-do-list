import { getAllTasks } from "./get-all-tasks";

let updateTasks = (taskToUpdate) => {
    const tasks = getAllTasks();
    const existingTask = tasks.find(task => task.id == taskToUpdate.id);

    if (existingTask) {
        existingTask.title = taskToUpdate.title,
        existingTask.description = taskToUpdate.description,
        existingTask.dueDate = taskToUpdate.dueDate,
        existingTask.priority = taskToUpdate.priority,
        existingTask.project = taskToUpdate.project,
        existingTask.section = taskToUpdate.section,
        existingTask.id = taskToUpdate.id
    } else {
        taskToUpdate.id = Math.floor(Math.random() * 100);
        tasks.push(taskToUpdate);
    }

    localStorage.setItem('todoapp-tasks', JSON.stringify(tasks));
};

export {updateTasks};