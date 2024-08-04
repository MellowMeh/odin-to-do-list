import '../style/index.css';
import { toggleDarkMode } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { themeSlider, addTaskContainer, collapseSidebarIcon, mainAddTaskContainer, navAddProjectContainer, inboxFolder, todayFolder } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateInbox, generateToday } from '../modules/inbox';
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
todayFolder.addEventListener('click', generateToday);
