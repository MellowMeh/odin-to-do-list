import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import {getAllTasks} from '../modules/get-all-tasks';
import { updateTasks } from '../modules/update-tasks';
import { deleteTask } from '../modules/delete-task';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();
getAllTasks();



console.log(getAllTasks());