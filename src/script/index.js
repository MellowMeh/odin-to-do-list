import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { addTaskContainer, collapseSidebarIcon, mainAddTaskContainer } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateInbox } from '../modules/inbox';
import { collapseSidebar } from '../modules/side-bar';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();
generateInbox();

addTaskContainer.addEventListener('click', generateAddTaskPopUp);
mainAddTaskContainer.addEventListener('click', generateAddTaskPopUp);
collapseSidebarIcon.addEventListener('click', collapseSidebar);
