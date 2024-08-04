import '../style/index.css';
import { toggleDarkMode } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
<<<<<<< HEAD
import { themeSlider, addTaskContainer, collapseSidebarIcon, mainAddTaskContainer, navAddProjectContainer } from '../modules/dom-query';
=======
import { addTaskContainer, collapseSidebarIcon, mainAddTaskContainer } from '../modules/dom-query';
>>>>>>> parent of b2b4c19 (Add project modules)
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateInbox } from '../modules/inbox';
import { collapseSidebar, generateExpandSidebarIcon } from '../modules/side-bar';


toggleDarkMode();
storageAvailable();
generateInbox();

themeSlider.addEventListener('click', toggleDarkMode);
addTaskContainer.addEventListener('click', generateAddTaskPopUp);
mainAddTaskContainer.addEventListener('click', generateAddTaskPopUp);
collapseSidebarIcon.addEventListener('click', () => {
    collapseSidebar();
    generateExpandSidebarIcon();
});
    
