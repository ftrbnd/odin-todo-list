import createItemView from "../class-views/item-view";
import createProjectView from "../class-views/project-view";
import Project from "../classes/project";
import TodoItem from "../classes/todo-item";

export default function loadDefaultProject() {
    const defaultProjectDiv = document.querySelector('div#default');
    const newItemForm = document.querySelector('form#new-item');

    localStorage.setItem('main-project-id', 'default');
    
    if (!localStorage.getItem('user-projects')) {
        localStorage.setItem('user-projects', 'default');
    }

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'main-project');

    const projectName = document.createElement('h2');
    const defaultProjectTitle = localStorage.getItem('default-project-name');
    if (defaultProjectTitle) {
        projectName.textContent = defaultProjectTitle;
    } else {
        projectName.textContent = 'Default Project';
        localStorage.setItem('project-default-name', 'Default Project');
    }
    projectHeader.appendChild(projectName);

    const projectDescription = document.createElement('p');
    const defaultProjectDesc = localStorage.getItem('default-project-desc');
    if (defaultProjectDesc) {
        projectDescription.textContent = defaultProjectDesc;
    } else {
        projectDescription.textContent = 'This is your default project';
        localStorage.setItem('project-default-desc', 'This is your default project');
    }

    const newItemButton = document.createElement('button');
    newItemButton.id = 'new-item';
    newItemButton.textContent = 'New';
    newItemButton.addEventListener('click', revealNewItemForm);

    projectHeader.appendChild(projectDescription);
    projectHeader.appendChild(newItemButton);
    defaultProjectDiv.insertBefore(projectHeader, newItemForm);

    const projectItems = document.createElement('div');
    projectItems.setAttribute('id', 'todo-items');
    defaultProjectDiv.appendChild(projectItems);

    let items;
    try {
        items = localStorage.getItem('project-default-items').split(',');
    } catch (e) {
        items = [];
        localStorage.setItem('project-default-items', '');
        console.log('localStorage found no items.');
    }

    for (const itemId of items) {
        if (itemId == 'null' || !itemId) continue;
        // create a div for this item and add it to projectItems div
        projectItems.appendChild(createItemView(new TodoItem(
            localStorage.getItem(`project-default-item-${itemId}-name`),
            localStorage.getItem(`project-default-item-${itemId}-desc`),
            localStorage.getItem(`project-default-item-${itemId}-dueDate`),
            localStorage.getItem(`project-default-item-${itemId}-priority`),
        )));
    }

    // add default project to sidebar
    const defaultProject = new Project(
        localStorage.getItem('project-default-name')
    );

    const projectsDiv = document.querySelector('div#projects-list');
    projectsDiv.insertBefore(createProjectView(defaultProject, 'default'), projectsDiv.firstChild);
}

function revealNewItemForm() {
    const newItemForm = document.querySelector('form#new-item');

    console.log('newItemButton click');
    if (!newItemForm.style.display) {
        newItemForm.style.display = 'flex';
    } else {
        newItemForm.removeAttribute('style');
    }
}