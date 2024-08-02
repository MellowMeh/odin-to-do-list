import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { addTaskContainer, mainAddTaskContainer } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateInbox } from '../modules/inbox';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();
generateInbox();

addTaskContainer.addEventListener('click', generateAddTaskPopUp);
mainAddTaskContainer.addEventListener('click', generateAddTaskPopUp);
