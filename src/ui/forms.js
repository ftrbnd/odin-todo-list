import Project from '../classes/project';
import createProjectView from '../class-views/project-view';
import TodoItem from '../classes/todo-item';
import createItemView from '../class-views/item-view';

export default function attachFormListeners() {
    newProjectForm();
    newTodoItemForm();
}

function newProjectForm() {
    const projectsContainer = document.querySelector('div#projects-list');
    const newProjectForm = document.querySelector('form#new-project');

    newProjectForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const projectData = [...data.entries()];
        const newProject = new Project(projectData[0][1], projectData[1][1]);
        console.log('Created a new project: ', newProject);

        let projectId;
        try {
            projectId = localStorage.getItem('user-projects').split(',').length + 1;
            console.log(`New project id = ${projectId}`);
        } catch (e) {
            projectId = 1;
            console.log("localStorage couldn't set the project id.");
        }
        localStorage.setItem(`project-${projectId}-name`, newProject.title);
        localStorage.setItem(`project-${projectId}-desc`, newProject.description);
        localStorage.setItem(`project-${projectId}-items`, newProject.items.join(','));

        const userProjects = localStorage.getItem('user-projects') + `,${projectId}`;
        localStorage.setItem('user-projects', userProjects);

        projectsContainer.appendChild(createProjectView(newProject, projectId));
        console.log('Local storage after adding project: ', localStorage);

        localStorage.setItem('main-project-id', projectId);

        const mainProject = document.querySelector('div#todo-items');
        while (mainProject.firstChild) {
            mainProject.removeChild(mainProject.firstChild);
        }

        const mainProjectName = document.querySelector('div#main-project > h2');
        mainProjectName.textContent = newProject.title;
        
        const mainProjectDesc = document.querySelector('div#main-project > p');
        mainProjectDesc.textContent = newProject.description;

        newProjectForm.reset();
        newProjectForm.removeAttribute('style');
    });
}

function newTodoItemForm() {
    const defaultProject = document.querySelector('div#todo-items');
    const newItemForm = document.querySelector('form#new-item');

    newItemForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const itemData = [...data.entries()];
        const newItem = new TodoItem(itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);
        console.log('Created a new todo item: ', newItem);

        const mainProjectId = localStorage.getItem('main-project-id');
        console.log(`New item was created under project id #${mainProjectId}`);

        let itemId;
        try {
            const curProjItems = localStorage.getItem(`project-${mainProjectId}-items`).split(',');
            itemId = curProjItems.length + 1;
            console.log(`New item id = ${itemId}`);
        } catch (e) {
            itemId = 1;
            console.log("Local storage couldn't set the item id.");
        }
        localStorage.setItem(`project-${mainProjectId}-item-${itemId}-name`, newItem.title);
        localStorage.setItem(`project-${mainProjectId}-item-${itemId}-desc`, newItem.description);
        localStorage.setItem(`project-${mainProjectId}-item-${itemId}-dueDate`, newItem.dueDate);
        localStorage.setItem(`project-${mainProjectId}-item-${itemId}-priority`, newItem.priority);

        const projectItems = localStorage.getItem(`project-${mainProjectId}-items`) + `,${itemId}`;
        localStorage.setItem(`project-${mainProjectId}-items`, projectItems);

        defaultProject.appendChild(createItemView(newItem));
        console.log('Local storage after adding item: ', localStorage);        

        newItemForm.reset();
        newItemForm.removeAttribute('style');
    });
}