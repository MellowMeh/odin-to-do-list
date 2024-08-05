import '../style/index.css';
import { toggleDarkMode } from '../modules/theme-toggle';
import { storageAvailable } from '../modules/detect-local-storage';
import { themeSlider, addTaskContainer, collapseSidebarIcon, mainAddTaskContainer, navAddProjectContainer, inboxFolder, todayFolder, upcomingFolder, priorityFolder, completedFolder } from '../modules/dom-query';
import { generateAddTaskPopUp } from '../modules/add-task-pop-up';
import { generateCompleted, generateInbox, generatePriority, generateToday, generateUpcoming } from '../modules/generateMain';
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
inboxFolder.addEventListener('click', generateInbox);
todayFolder.addEventListener('click', generateToday);
upcomingFolder.addEventListener('click', generateUpcoming);
priorityFolder.addEventListener('click', generatePriority);
completedFolder.addEventListener('click', generateCompleted);