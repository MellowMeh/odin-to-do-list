import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { addTaskContainer } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/api-add-task';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();

addTaskContainer.addEventListener('click', generateAddTaskPopUp);
