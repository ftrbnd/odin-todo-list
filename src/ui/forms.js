import Project from '../classes/project';
import createProjectView from '../class-views/project-view';
import TodoItem from '../classes/todo-item';
import createItemView from '../class-views/item-view';

export default function attachFormListeners() {
    newProjectForm();
    newTodoItemForm();
}

function newProjectForm() {
    const projectsContainer = document.querySelector('div#projects');
    const newProjectForm = document.querySelector('form#new-project');

    newProjectForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const projectData = [...data.entries()];

        const newProject = new Project(projectData[0][1], projectData[1][1]);
        console.log(newProject);

        projectsContainer.appendChild(createProjectView(newProject));

        newProjectForm.reset();
        newProjectForm.removeAttribute('style');
    });
}

function newTodoItemForm() {
    const defaultProject = document.querySelector('div#default');
    const newItemForm = document.querySelector('form#new-item');

    newItemForm.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        const itemData = [...data.entries()];

        console.log(itemData)
        const newItem = new TodoItem(itemData[0][1], itemData[1][1], itemData[2][1], itemData[3][1]);
        console.log(newItem);

        defaultProject.appendChild(createItemView(newItem));

        newItemForm.reset();
        newItemForm.removeAttribute('style');
    });
}