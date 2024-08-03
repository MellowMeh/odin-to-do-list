import { popUpContainer, sectionOne, taskCardsContainer } from "./dom-query";
import { generateInbox, selectedObjectDescription, selectedObjectDueDate, selectedObjectId, selectedObjectPriority, selectedObjectProject, selectedObjectTitle } from "./inbox";
import { closeAddTaskPopUp, captureAddTaskPopUpInformation } from "./add-task-pop-up";
import { updateTasks } from "./update-tasks";

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
    generateEditTaskPopUp
}