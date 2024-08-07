import { completedFolder, contentHeader, inboxFolder, priorityFolder, sectionFive, sectionFour, sectionOne, sectionThree, sectionTwo, taskCardsContainer, todayFolder, upcomingFolder } from "./dom-query";
import { generateEditTaskPopUp, removeInboxCards } from "./edit-task-pop-up";
import { getAllTasks } from "./get-all-tasks"
import { markComplete } from "./mark-task-complete";

let currentFolder;
let selectedObjectTitle;
let selectedObjectDescription;
let selectedObjectDueDate;
let selectedObjectPriority;
let selectedObjectProject;
let selectedObjectId;
class MyCustomDate extends Date {
    addDays(days) {
      const date = new MyCustomDate(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
  }
  const todayRaw = new MyCustomDate();
     let today = JSON.stringify(todayRaw).slice(1, 11);
  const tomorrowRaw = todayRaw.addDays(1);
    let tomorrow = JSON.stringify(tomorrowRaw).slice(1, 11);
  const twoDaysAwayRaw = todayRaw.addDays(2);
    let twoDaysAway = JSON.stringify(twoDaysAwayRaw).slice(1, 11);
  const threeDaysAwayRaw = todayRaw.addDays(3);
    let threeDaysAway = JSON.stringify(threeDaysAwayRaw).slice(1, 11);
  const fourDaysAwayRaw = todayRaw.addDays(4);
    let fourDaysAway = JSON.stringify(fourDaysAwayRaw).slice(1, 11);
  const fiveDaysAwayRaw = todayRaw.addDays(5);
    let fiveDaysAway = JSON.stringify(fiveDaysAwayRaw).slice(1, 11);

let resetFolderHighlight = () => {
    inboxFolder.style.backgroundColor = '';
    todayFolder.style.backgroundColor = '';
    upcomingFolder.style.backgroundColor = '';
    priorityFolder.style.backgroundColor = '';
    completedFolder.style.backgroundColor = '';
};

let generateInbox = () => {
    currentFolder = 'inbox';
    resetFolderHighlight();
    inboxFolder.style.backgroundColor = 'var(--color-selected)';
    removeInboxCards();
    contentHeader.textContent = 'inbox';
    let tasks = getAllTasks();
    tasks.forEach((task) => {
    if (task.project !== 'complete') {
        let taskCard = document.createElement('div');
        taskCard.setAttribute('class', 'task-card');

        let checkMark;

        let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
        let taskCheckbox = document.createElement('div');
        taskCheckbox.setAttribute('class', 'task-checkbox');
        taskCheckbox.innerHTML = taskCheckBoxCode;
        taskCheckbox.addEventListener('mouseenter', () => {
            let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
            checkMark = document.createElement('div');
            checkMark.setAttribute('class', 'checkmark');
            checkMark.innerHTML = checkMarkCode;
            taskCheckbox.appendChild(checkMark);
        });
        taskCheckbox.addEventListener('mouseleave', () => {
            taskCheckbox.removeChild(checkMark);
        });
        taskCheckbox.addEventListener('click', () => {
            selectedObjectTitle = task.title;
            selectedObjectDescription = task.description;
            selectedObjectDueDate = task.dueDate;
            selectedObjectPriority = task.priority;
            selectedObjectProject = task.project;
            selectedObjectId = task.id;
            markComplete();
        });
        taskCard.appendChild(taskCheckbox);

        let taskTextContainer = document.createElement('div');
        taskTextContainer.setAttribute('class', 'task-text-container');
            let taskText = document.createElement('div');
            taskText.setAttribute('class', 'task-text');
            taskText.textContent = (task.title);
            taskTextContainer.appendChild(taskText);

            let taskDescription = document.createElement('div');
            taskDescription.setAttribute('class', 'task-description');
            taskDescription.textContent = (task.description);
            taskTextContainer.appendChild(taskDescription);

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

                let taskPriority = document.createElement('div');
                taskPriority.setAttribute('class', 'task-project');
                taskPriority.textContent = (task.priority);
                taskTags.appendChild(taskPriority);
            taskTextContainer.appendChild(taskTags);
        taskCard.appendChild(taskTextContainer);

        let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
        let taskOptions = document.createElement('div');
        taskOptions.setAttribute('class', 'task-options');
        taskOptions.innerHTML = taskOptionsCode;
        taskOptions.addEventListener('click', () => {
            selectedObjectTitle = task.title;
            selectedObjectDescription = task.description;
            selectedObjectDueDate = task.dueDate;
            selectedObjectPriority = task.priority;
            selectedObjectProject = task.project;
            selectedObjectId = task.id;
            generateEditTaskPopUp();
        })
        taskCard.appendChild(taskOptions);

        taskCardsContainer.appendChild(taskCard);
    }
    })
};

let generateToday = () => {
    currentFolder = 'today';
    resetFolderHighlight();
    todayFolder.style.backgroundColor = 'var(--color-selected)';
    removeInboxCards();
    contentHeader.textContent = 'today';
    let tasks = getAllTasks();
    tasks.forEach((task) => {
        if (task.dueDate === today && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            taskCardsContainer.appendChild(taskCard);
        }
    })
}

let generateUpcoming = () => {
    currentFolder = 'upcoming';
    resetFolderHighlight();
    upcomingFolder.style.backgroundColor = 'var(--color-selected)';
    removeInboxCards();
    contentHeader.textContent = 'upcoming';
    sectionOne.textContent = 'Tomorrow';
    sectionTwo.textContent = twoDaysAway;
    sectionThree.textContent = threeDaysAway;
    sectionFour.textContent = fourDaysAway;
    sectionFive.textContent = fiveDaysAway;
    let tasks = getAllTasks();
    tasks.forEach((task) => {
        if (task.dueDate === tomorrow && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionOne.appendChild(taskCard);
        }
        if (task.dueDate === twoDaysAway && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionTwo.appendChild(taskCard);
        }
        if (task.dueDate === threeDaysAway && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionThree.appendChild(taskCard);
        }
        if (task.dueDate === fourDaysAway && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionFour.appendChild(taskCard);
        }
        if (task.dueDate === fiveDaysAway && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionFive.appendChild(taskCard);
        }
    })
}

let generatePriority = () => {
    currentFolder = 'priority';
    resetFolderHighlight();
    priorityFolder.style.backgroundColor = 'var(--color-selected)';
    removeInboxCards();
    contentHeader.textContent = 'priority';
    sectionOne.textContent = 'High';
    sectionTwo.textContent = 'Medium';
    sectionThree.textContent = 'Low';
    let tasks = getAllTasks();
    tasks.forEach((task) => {
        if (task.priority === 'high' && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionOne.appendChild(taskCard);
        }
        if (task.priority === 'medium' && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionTwo.appendChild(taskCard);
        }
        if (task.priority === 'low' && task.project !== 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
            taskCheckbox.addEventListener('mouseenter', () => {
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            });
            taskCheckbox.addEventListener('mouseleave', () => {
                taskCheckbox.removeChild(checkMark);
            });
            taskCheckbox.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                markComplete();
            })
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            sectionThree.appendChild(taskCard);
        }
    })
};

let generateCompleted = () => {
    currentFolder = 'completed';
    resetFolderHighlight();
    completedFolder.style.backgroundColor = 'var(--color-selected)';
    removeInboxCards();
    contentHeader.textContent = 'completed';
    let tasks = getAllTasks();
    tasks.forEach((task) => {
        if (task.project === 'complete') {
            let taskCard = document.createElement('div');
            taskCard.setAttribute('class', 'task-card');

            let checkMark;

            let taskCheckBoxCode = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>circle</title><path d="M11.5,3C16.75,3 21,7.25 21,12.5C21,17.75 16.75,22 11.5,22C6.25,22 2,17.75 2,12.5C2,7.25 6.25,3 11.5,3M11.5,4C6.81,4 3,7.81 3,12.5C3,17.19 6.81,21 11.5,21C16.19,21 20,17.19 20,12.5C20,7.81 16.19,4 11.5,4Z" /></svg>'
            let taskCheckbox = document.createElement('div');
            taskCheckbox.setAttribute('class', 'task-checkbox');
            taskCheckbox.innerHTML = taskCheckBoxCode;
                let checkMarkCode = '<svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>check</title><path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" /></svg>'
                checkMark = document.createElement('div');
                checkMark.setAttribute('class', 'checkmark');
                checkMark.innerHTML = checkMarkCode;
                taskCheckbox.appendChild(checkMark);
            taskCard.appendChild(taskCheckbox);

            let taskTextContainer = document.createElement('div');
            taskTextContainer.setAttribute('class', 'task-text-container');
                let taskText = document.createElement('div');
                taskText.setAttribute('class', 'task-text');
                taskText.textContent = (task.title);
                taskTextContainer.appendChild(taskText);

                let taskDescription = document.createElement('div');
                taskDescription.setAttribute('class', 'task-description');
                taskDescription.textContent = (task.description);
                taskTextContainer.appendChild(taskDescription);

                let taskTags = document.createElement('div');
                taskTags.setAttribute('class', 'task-tags');
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

                    let taskPriority = document.createElement('div');
                    taskPriority.setAttribute('class', 'task-project');
                    taskPriority.textContent = (task.priority);
                    taskTags.appendChild(taskPriority);
                taskTextContainer.appendChild(taskTags);
            taskCard.appendChild(taskTextContainer);

            let taskOptionsCode = '<svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>dots-horizontal</title><path d="M16,12C16,10.9 16.9,10 18,10C19.1,10 20,10.9 20,12C20,13.1 19.1,14 18,14C16.9,14 16,13.1 16,12M10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12M4,12C4,10.9 4.9,10 6,10C7.1,10 8,10.9 8,12C8,13.1 7.1,14 6,14C4.9,14 4,13.1 4,12M6,11C5.45,11 5,11.45 5,12C5,12.55 5.45,13 6,13C6.55,13 7,12.55 7,12C7,11.45 6.55,11 6,11M12,11C11.45,11 11,11.45 11,12C11,12.55 11.45,13 12,13C12.55,13 13,12.55 13,12C13,11.45 12.55,11 12,11M18,11C17.45,11 17,11.45 17,12C17,12.55 17.45,13 18,13C18.55,13 19,12.55 19,12C19,11.45 18.55,11 18,11Z" /></svg>';
            let taskOptions = document.createElement('div');
            taskOptions.setAttribute('class', 'task-options');
            taskOptions.innerHTML = taskOptionsCode;
            taskOptions.addEventListener('click', () => {
                selectedObjectTitle = task.title;
                selectedObjectDescription = task.description;
                selectedObjectDueDate = task.dueDate;
                selectedObjectPriority = task.priority;
                selectedObjectProject = task.project;
                selectedObjectId = task.id;
                generateEditTaskPopUp();
            })
            taskCard.appendChild(taskOptions);

            taskCardsContainer.appendChild(taskCard);
        }
    })
}

export {
    generateInbox,
    generateToday,
    generateUpcoming, 
    generatePriority,
    generateCompleted,
    selectedObjectTitle,
    selectedObjectDescription,
    selectedObjectDueDate,
    selectedObjectPriority,
    selectedObjectProject,
    selectedObjectId,
    currentFolder
}