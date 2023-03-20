const generateUniqueId = require('generate-unique-id');

import Project from '../classes/project';
import createProjectView from '../class-views/project-view';
import TodoItem from '../classes/todo-item';
import createItemView from '../class-views/item-view';

export default function attachFormListeners() {
    newProjectForm();
    newTodoItemForm();
}

function newProjectForm() {
    const projectsList = document.querySelector('div#projects-list');
    const newProjectForm = document.querySelector('form#new-project');

    newProjectForm.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(e.target);
        const projectData = [...data.entries()];

        const projectId = `project-${generateUniqueId()}`;
        const newProject = new Project(projectId, projectData[0][1], projectData[1][1]);
        console.log('Created a new project: ', newProject);
        
        localStorage.setItem(projectId, JSON.stringify(newProject));

        const userProjects = localStorage.getItem('user-projects') + `${projectId},`;
        localStorage.setItem('user-projects', userProjects);


        projectsList.appendChild(createProjectView(newProject));
        console.log('Local storage after adding project: ', localStorage);
        
        newProjectForm.reset();
        newProjectForm.removeAttribute('style');
    });
}

function newTodoItemForm() {
    const mainProjectItems = document.querySelector('div#todo-items');
    const newItemForm = document.querySelector('form#new-item');

    newItemForm.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(e.target);
        const itemData = [...data.entries()];

        const itemId = `item-${generateUniqueId()}`;
        const newItem = new TodoItem(itemId, itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);
        console.log('Created a new todo item: ', newItem);

        const currentProjectId = localStorage.getItem('main-project-id');
        const currentProject = JSON.parse(localStorage.getItem(currentProjectId));

        currentProject.items.push(JSON.stringify(newItem));
        localStorage.setItem(currentProjectId, JSON.stringify(currentProject));

        mainProjectItems.appendChild(createItemView(newItem));
        console.log('Local storage after adding item: ', localStorage);        

        newItemForm.reset();
        newItemForm.removeAttribute('style');
    });
}