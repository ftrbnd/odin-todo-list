import generateUniqueId from "generate-unique-id";
import { createItemView } from "../class-views/item-view";
import Project from "../classes/project";
import TodoItem from "../classes/todo-item";
   
const defaultProjectDiv = document.querySelector('div#default');

export default function loadDefaultProject() {
    resetDiv();
    const mainProject = loadMainProject();
    displayHeader();
    displayItems(mainProject);
}

function resetDiv() {
    for (const child of defaultProjectDiv.children) {
        console.log(child);
        if (child != document.querySelector('form#new-item'))
            child.remove();
    }
}

function loadMainProject() {
    let MAIN_PROJECT_ID = localStorage.getItem('main-project-id');
    if (!MAIN_PROJECT_ID) { // generate default project id
        MAIN_PROJECT_ID = `project-${generateUniqueId()}`;
        localStorage.setItem('main-project-id', MAIN_PROJECT_ID);

        const newProject = new Project(MAIN_PROJECT_ID, 'Default Project', 'This is your default project');
        localStorage.setItem(MAIN_PROJECT_ID, JSON.stringify(newProject));

        let userProjects = localStorage.getItem('user-projects') || '';
        userProjects += `${MAIN_PROJECT_ID},`;
        localStorage.setItem('user-projects', userProjects);
    }
    console.log(`Main project id: ${MAIN_PROJECT_ID}`);
    localStorage.setItem('display-edit-form', 'true');
    
    return JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));
}

function displayHeader() {
    const newItemForm = document.querySelector('form#new-item');
    
    const MAIN_PROJECT_ID = localStorage.getItem('main-project-id');
    const mainProject = JSON.parse(localStorage.getItem(MAIN_PROJECT_ID));

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'main-project');

    const projectName = document.createElement('h2');
    projectName.textContent = mainProject.title;
    projectHeader.appendChild(projectName);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = mainProject.description;

    const newItemButton = document.createElement('button');
    newItemButton.id = 'new-item';
    newItemButton.textContent = 'New';
    newItemButton.addEventListener('click', revealNewItemForm);

    projectHeader.appendChild(projectDescription);
    projectHeader.appendChild(newItemButton);
    defaultProjectDiv.insertBefore(projectHeader, newItemForm);
}

function displayItems(project) {
    const projectItems = document.createElement('div');
    projectItems.setAttribute('id', 'todo-items');
    defaultProjectDiv.appendChild(projectItems);

    for (const itemId of project.items) {
        const item = JSON.parse(localStorage.getItem(itemId));
        // create a div for this item and add it to projectItems div
        projectItems.appendChild(createItemView(new TodoItem(
            item.id,
            item.title,
            item.description,
            item.dueDate,
            item.priority,
        )));
    }
}

function revealNewItemForm() {
    console.log('newItemButton click');

    const newItemForm = document.querySelector('form#new-item');
    if (!newItemForm.style.display) {
        newItemForm.style.display = 'flex';
    } else {
        newItemForm.removeAttribute('style');
    }
}