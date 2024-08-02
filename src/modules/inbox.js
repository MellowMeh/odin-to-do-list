import { sectionOne, taskCardsContainer } from "./dom-query";
import { getAllTasks } from "./get-all-tasks"

let generateInbox = () => {
    let tasks = getAllTasks();
    tasks.forEach((task) => {
        let taskCard = document.createElement('div');
        taskCard.setAttribute('class', 'task-card');

        let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
        let taskCheckbox = document.createElement('div');
        taskCheckbox.setAttribute('class', 'task-checkbox');
        taskCheckbox.innerHTML = taskCheckBoxCode;
        taskCard.appendChild(taskCheckbox);

        let taskTextContainer = document.createElement('div');
        taskTextContainer.setAttribute('class', 'task-text-container');
            let taskText = document.createElement('div');
            taskText.setAttribute('class', 'task-text');
            taskText.textContent = (task.title);
            taskTextContainer.appendChild(taskText);

            let taskTags = document.createElement('div');
            taskTags.setAttribute('class', 'task-tags');
            taskTags.textContent = (task.project);
                let taskDueDateCode = '<svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>calendar</title><path d="M7,2H8C8.55,2 9,2.45 9,3V4H14V3C14,2.45 14.45,2 15,2H16C16.55,2 17,2.45 17,3V4C18.66,4 20,5.34 20,7V18C20,19.66 18.66,21 17,21H6C4.34,21 3,19.66 3,18V7C3,5.34 4.34,4 6,4V3C6,2.45 6.45,2 7,2M15,4H16V3H15V4M8,4V3H7V4H8M6,5C4.9,5 4,5.9 4,7V8H19V7C19,5.9 18.1,5 17,5H6M4,18C4,19.1 4.9,20 6,20H17C18.1,20 19,19.1 19,18V9H4V18M12,13H17V18H12V13M13,14V17H16V14H13Z" /></svg>';
                let taskDueDateIcon = document.createElement('div');
                taskDueDateIcon.innerHTML = taskDueDateCode;
                taskTags.appendChild(taskDueDateIcon);

                let taskDueDateText = document.createElement('div');
                taskDueDateText.setAttribute('class', 'task-due-date');
                taskDueDateText.textContent = (task.dueDate);
                taskTags.appendChild(taskDueDateText);


                let taskProject = document.createElement('div');
                taskProject.setAttribute('class', 'task-project');
                taskProject.textContent = (task.project);
                taskTags.appendChild(taskProject);
            taskTextContainer.appendChild(taskTags);
        taskCard.appendChild(taskTextContainer);

        let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
        let taskOptions = document.createElement('div');
        taskOptions.setAttribute('class', 'task-options');
        taskOptions.innerHTML = taskOptionsCode;
        taskCard.appendChild(taskOptions);

        taskCardsContainer.appendChild(taskCard);
    })
}

export {
    generateInbox
}