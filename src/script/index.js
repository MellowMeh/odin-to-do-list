import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import {getAllTasks} from '../modules/get-all-tasks';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();
getAllTasks();

console.log(getAllTasks());