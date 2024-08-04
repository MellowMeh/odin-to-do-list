import { nav, navAddProjectContainer, projectFoldersContainer } from "./dom-query";



let projectNameInput;

let generateAddProjectPopUp = () => {
    let addProjectPopUpContainer = document.createElement('div');
    addProjectPopUpContainer.setAttribute('class', 'add-project-pop-up-container');
    projectFoldersContainer.appendChild(addProjectPopUpContainer)

    let projectNameInput = document.querySelector('input');
    projectNameInput.setAttribute('id', 'project-name-input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('placeholder', 'Name this project');
    addProjectPopUpContainer.appendChild(projectNameInput);

    let addProjectPopUpButtonContainer = document.createElement('div');
    addProjectPopUpButtonContainer.setAttribute('class', 'add-task-pop-up-button-container');

    let cancelButton = document.createElement('button');
        cancelButton.setAttribute('id', 'cancel-button');
        cancelButton.textContent = 'cancel';
        cancelButton.addEventListener('click', () => {
            console.log('need update add-project-pop-up: 25');
        })
        addProjectPopUpButtonContainer.appendChild(cancelButton);

    let addTaskButton = document.createElement('button');
        addTaskButton.setAttribute('id', 'add-task-button');
        addTaskButton.textContent = 'add task';
        addTaskButton.addEventListener('click', () => {
            console.log('need update add-project-pop-up: 33');
        })
        addProjectPopUpButtonContainer.appendChild(addTaskButton);

    addProjectPopUpContainer.appendChild(addProjectPopUpButtonContainer);
}

export {
    generateAddProjectPopUp
}