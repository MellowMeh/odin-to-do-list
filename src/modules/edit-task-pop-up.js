import { popUpContainer, sectionOne, taskCardsContainer } from "./dom-query";
import { generateInbox, selectedObjectDescription, selectedObjectDueDate, selectedObjectId, selectedObjectPriority, selectedObjectProject, selectedObjectTitle } from "./inbox";
import { closeAddTaskPopUp, captureAddTaskPopUpInformation } from "./add-task-pop-up";
import { updateTasks } from "./update-tasks";
import { deleteTask } from "./delete-task";

let taskNameInput;
let descriptionInput;
let dueDateInput;
let priorityInput;
let projectInput;

let generateEditTaskPopUp = () => {
    let addTaskPopUpContainer = document.createElement('div');
    addTaskPopUpContainer.setAttribute('class', 'add-task-pop-up-container');
    popUpContainer.appendChild(addTaskPopUpContainer);

    let addTaskPopUpTop = document.createElement('div');
    addTaskPopUpTop.setAttribute('class', 'add-task-pop-up-top');
    addTaskPopUpContainer.appendChild(addTaskPopUpTop);

    let deleteTaskIconCode = '<svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>'
    let deleteTaskIcon = document.createElement('div');
    deleteTaskIcon.setAttribute('id', 'delete-task-icon');
    deleteTaskIcon.innerHTML = deleteTaskIconCode;
    deleteTaskIcon.addEventListener('click', () => {
        deleteTask(selectedObjectId);
        removeInboxCards();
        generateInbox();
        closeAddTaskPopUp();
    });
    addTaskPopUpTop.appendChild(deleteTaskIcon);

    taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('class', 'add-task-pop-up-input');
    taskNameInput.setAttribute('id', 'task-name-input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', selectedObjectTitle);
    taskNameInput.setAttribute('value', selectedObjectTitle)
    addTaskPopUpTop.appendChild(taskNameInput);

    descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('class', 'add-task-pop-up-input');
    descriptionInput.setAttribute('id', 'description-input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', selectedObjectDescription);
    descriptionInput.setAttribute('value', selectedObjectDescription);
    addTaskPopUpTop.appendChild(descriptionInput);

    let datePriorityContainer = document.createElement('div');
    datePriorityContainer.setAttribute('class', 'date-priority-container');
    addTaskPopUpTop.appendChild(datePriorityContainer);

    dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('class', 'add-task-pop-up-input');
    dueDateInput.setAttribute('id', 'due-date-input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('placeholder', '');
    dueDateInput.setAttribute('value', selectedObjectDueDate);
    datePriorityContainer.appendChild(dueDateInput);

    priorityInput = document.createElement('select');
    priorityInput.setAttribute('class', 'add-task-pop-up-input');
    priorityInput.setAttribute('id', 'priority-input');
        let priorityPlaceholder = document.createElement('option');
        priorityPlaceholder.setAttribute('disabled', 'true');
        priorityPlaceholder.setAttribute('selected', 'true');
        priorityPlaceholder.textContent = selectedObjectPriority;

        let highPriority = document.createElement('option');
        highPriority.setAttribute('value', 'high');
        highPriority.textContent = 'high';

        let mediumPriority = document.createElement('option');
        mediumPriority.setAttribute('value', 'medium');
        mediumPriority.textContent = 'medium';

        let lowPriority = document.createElement('option');
        lowPriority.setAttribute('value', 'low');
        lowPriority.textContent = 'low';

    datePriorityContainer.appendChild(priorityInput);
        priorityInput.appendChild(priorityPlaceholder);
        priorityInput.appendChild(highPriority);
        priorityInput.appendChild(mediumPriority);
        priorityInput.appendChild(lowPriority);

    let addTaskPopUpBottom = document.createElement('div');
    addTaskPopUpBottom.setAttribute('class', 'add-task-pop-up-bottom');
    addTaskPopUpContainer.appendChild(addTaskPopUpBottom);

    projectInput = document.createElement('select');
    projectInput.setAttribute('class', 'add-task-pop-up-input');
    projectInput.setAttribute('id', 'project-input');
        let projectPlaceholder = document.createElement('option');
        projectPlaceholder.setAttribute('placedholder', selectedObjectProject);
        projectPlaceholder.setAttribute('value', selectedObjectProject);
        projectPlaceholder.setAttribute('disabled', 'true');
        projectPlaceholder.setAttribute('selected', 'true');
        projectPlaceholder.textContent = 'project';

    addTaskPopUpBottom.appendChild(projectInput);
        projectInput.appendChild(projectPlaceholder);

    let addTaskPopUpButtonContainer = document.createElement('div');
    addTaskPopUpButtonContainer.setAttribute('class', 'add-task-pop-up-button-container');

    let cancelButton = document.createElement('button');
        cancelButton.setAttribute('id', 'cancel-button');
        cancelButton.textContent = 'cancel';
        cancelButton.addEventListener('click', closeAddTaskPopUp)
        addTaskPopUpButtonContainer.appendChild(cancelButton);

    let addTaskButton = document.createElement('button');
        addTaskButton.setAttribute('id', 'add-task-button');
        addTaskButton.textContent = 'add task';
        addTaskButton.addEventListener('click', () => {
            captureEdit();
        });
        addTaskPopUpButtonContainer.appendChild(addTaskButton);

    addTaskPopUpBottom.appendChild(addTaskPopUpButtonContainer);
};

let removeInboxCards = () => {
    while (taskCardsContainer.firstChild) {
        taskCardsContainer.removeChild(taskCardsContainer.firstChild);
    }
};

let captureEdit = () => {
    let userInput = {
        title: taskNameInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        project: projectInput.value,
        id: selectedObjectId
    }
    updateTasks(userInput);
    removeInboxCards();
    generateInbox();
    closeAddTaskPopUp();
 };

export {
    generateEditTaskPopUp,
    removeInboxCards
}