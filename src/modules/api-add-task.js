import { contentContainer, popUpContainer } from "./dom-query";

let generateAddTaskPopUp = () => {
    let addTaskPopUpContainer = document.createElement('div');
    addTaskPopUpContainer.setAttribute('class', 'add-task-pop-up-container');
    popUpContainer.appendChild(addTaskPopUpContainer);

    let addTaskPopUpTop = document.createElement('div');
    addTaskPopUpTop.setAttribute('class', 'add-task-pop-up-top');
    addTaskPopUpContainer.appendChild(addTaskPopUpTop);

    let taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('class', 'add-task-pop-up-input');
    taskNameInput.setAttribute('id', 'task-name-input');
    taskNameInput.setAttribute('type', 'text');
    taskNameInput.setAttribute('placeholder', 'task name');
    addTaskPopUpTop.appendChild(taskNameInput);

    let descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('class', 'add-task-pop-up-input');
    descriptionInput.setAttribute('id', 'description-input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'description');
    addTaskPopUpTop.appendChild(descriptionInput);

    let datePriorityContainer = document.createElement('div');
    datePriorityContainer.setAttribute('class', 'date-priority-container');
    addTaskPopUpTop.appendChild(datePriorityContainer);

    let dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('class', 'add-task-pop-up-input');
    dueDateInput.setAttribute('id', 'due-date-input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('placeholder', 'due date');
    datePriorityContainer.appendChild(dueDateInput);

    let priorityInput = document.createElement('select');
    priorityInput.setAttribute('class', 'add-task-pop-up-input');
    priorityInput.setAttribute('id', 'priority-input');
        let priorityPlaceholder = document.createElement('option');
        priorityPlaceholder.setAttribute('value', '');
        priorityPlaceholder.setAttribute('disabled', 'true');
        priorityPlaceholder.setAttribute('selected', 'true');
        priorityPlaceholder.textContent = 'priority';

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

    let projectInput = document.createElement('select');
    projectInput.setAttribute('class', 'add-task-pop-up-input');
    projectInput.setAttribute('id', 'project-input');
        let projectPlaceholder = document.createElement('option');
        projectPlaceholder.setAttribute('value', '');
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
        addTaskPopUpButtonContainer.appendChild(addTaskButton);

    addTaskPopUpBottom.appendChild(addTaskPopUpButtonContainer);

};

let closeAddTaskPopUp = () => {
    while (popUpContainer.firstChild) {
        popUpContainer.removeChild(popUpContainer.firstChild);
    };
}

export {generateAddTaskPopUp, closeAddTaskPopUp};