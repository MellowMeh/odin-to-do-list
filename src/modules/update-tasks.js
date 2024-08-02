import { getAllTasks } from "./get-all-tasks";

let updateTasks = () => {
    const tasks = getAllTasks();
    const existingTask = tasks.find(task => task.id == taskToSave.id);

    if (existingTask) {
        existingTask.title = taskToSave.title,
        existingTask.description = taskToSave.description,
        existingTask.dueDate = taskToSave.dueDate,
        existingTask.priority = taskToSave.priority,
        existingTask.project = taskToSave.project,
        existingTask.section = taskToSave.section,
        existingTask.id = taskToSave.id
    } else {
        taskToSave.id = Math.floor(Math.random() * 1000000);
        tasks.push(taskToSave);
    }

    localStorage.setItem('todoapp-tasks', JSON.stringify(tasks));
};

export {updateTasks};