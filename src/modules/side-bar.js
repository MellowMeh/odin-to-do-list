import { body, contentHeader, nav, sidebarContainer } from "./dom-query"


let collapseSidebar = () => {
    sidebarContainer.style.width = '0';
    nav.style.backgroundColor = 'var(--color-base-bg)';
    body.style.gridTemplateColumns = '0px 1fr';
};

let sidebarIcon;

let generateExpandSidebarIcon = () => {
    let sidebarIconCode = '<svg xmlns="http://www.w3.org/2000/svg" width="25px" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><title>menu</title><path d="M3,8V7H20V8H3M20,12V13H3V12H20M3,17H20V18H3V17Z" /></svg>';
    sidebarIcon = document.createElement('div');
    sidebarIcon.setAttribute('class', 'sidebar-icon');
    sidebarIcon.innerHTML = sidebarIconCode;
    sidebarIcon.addEventListener('click', expandSidebar);
    contentHeader.appendChild(sidebarIcon);
};

let expandSidebar = () => {
    contentHeader.removeChild(sidebarIcon);
    sidebarContainer.style.width = '280px';
    nav.style.backgroundColor = 'var(--color-nav-bg)';
    body.style.gridTemplateColumns = '280px 1fr';
}

export {
    collapseSidebar,
    expandSidebar,
    generateExpandSidebarIcon
}