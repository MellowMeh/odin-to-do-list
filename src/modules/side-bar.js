import { body, nav, sidebarContainer } from "./dom-query"


let collapseSidebar = () => {
    sidebarContainer.style.width = '0';
    nav.style.backgroundColor = 'var(--color-base-bg)';
    body.style.gridTemplateColumns = '0px 1fr';

    let expandSidebarIconCode = '<svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>menu</title><path d="M3,8V7H20V8H3M20,12V13H3V12H20M3,17H20V18H3V17Z" /></svg>';
    let expandSidebarIcon = document.createElement('div');
    expandSidebarIcon.setAttribute('id', 'delete-task-icon');
    deleteTaskIcon.innerHTML = expandSidebarIconCode;
    expandSidebarIcon.addEventListener('click', expandSidebar);
    main.appendChild(expandSidebarIcon);
};

let expandSidebar = () => {
    sidebarContainer.style.width = '280px';
    nav.style.backgroundColor = 'var(--color-nav-bg)';
    body.style.gridTemplateColumns = '280px 1fr';
}

export {
    collapseSidebar,
    expandSidebar
}