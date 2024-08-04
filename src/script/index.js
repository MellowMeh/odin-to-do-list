import '../style/index.css';
import { toggleDarkMode, changeDisplayedTheme } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { addTaskContainer, collapseSidebarIcon, mainAddTaskContainer, navAddProjectContainer } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateInbox } from '../modules/inbox';
import { collapseSidebar, generateExpandSidebarIcon } from '../modules/side-bar';
import { generateAddProjectPopUp } from '../modules/add-project-pop-up';


toggleDarkMode();
changeDisplayedTheme();
storageAvailable();
generateInbox();

addTaskContainer.addEventListener('click', generateAddTaskPopUp);
mainAddTaskContainer.addEventListener('click', generateAddTaskPopUp);
collapseSidebarIcon.addEventListener('click', () => {
    collapseSidebar();
    generateExpandSidebarIcon();
});
navAddProjectContainer.addEventListener('click', generateAddProjectPopUp);
    
