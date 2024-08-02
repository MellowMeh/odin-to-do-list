import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import {getAllTasks} from '../modules/get-all-tasks';
import { updateTasks } from '../modules/update-tasks';
import { deleteTask } from '../modules/delete-task';
import { taskCreator } from '../modules/create-task';
import { addTaskButton, addTaskContainer } from '../modules/dom-query';
import { apiAddTask } from '../modules/api-add-task';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();

addTaskContainer.addEventListener('click', apiAddTask);
