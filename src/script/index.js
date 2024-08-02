import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import {getAllTasks} from '../modules/get-all-tasks';
import { updateTasks } from '../modules/update-tasks';
import { deleteTask } from '../modules/delete-task';
import { taskCreator } from '../modules/create-task';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();

const example = taskCreator('manually updated', 'description', 'due date', 'priority', 'project', 'section', '61');

updateTasks(example);


console.table(getAllTasks());