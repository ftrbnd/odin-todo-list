import TodoItem from "../classes/todo-item";
import createItemView from "./item-view";

export default function createProjectView(project, id) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const h3 = document.createElement('h3');
    h3.textContent = project.title;
    h3.classList.add('title');
    projectDiv.appendChild(h3);

    projectDiv.addEventListener('click', () => {
        if (localStorage.getItem('main-project-id') == id) return;

        console.log(`Project "${project.title}" was selected`);

        const projectName = document.querySelector('#main-project > h2');
        projectName.textContent = project.title;

        let projectItemsDiv = document.querySelector('div#todo-items');

        if (project.title == 'Default Project') {
            localStorage.setItem('main-project-id', 'default');
        } else {
            localStorage.setItem('main-project-id', localStorage.getItem('user-projects').split(',').length);
        }

        const projectItems = [];
        const userProjects = localStorage.getItem('user-projects').split(',');
        for (const projId of userProjects) {
            if (projId == localStorage.getItem('main-project-id')) {
                const projItems = localStorage.getItem(`project-${projId}-items`).split(',');
                for (const itemId of projItems) {
                    if (itemId == 'null' || !itemId) continue;

                    console.log(`Found item #${itemId} under project #${projId}`);
                    projectItems.push(new TodoItem(
                        localStorage.getItem(`project-${projId}-item-${itemId}-name`),
                        localStorage.getItem(`project-${projId}-item-${itemId}-desc`),
                        localStorage.getItem(`project-${projId}-item-${itemId}-dueDate`),
                        localStorage.getItem(`project-${projId}-item-${itemId}-priority`),
                    ));
                }
            }
        }

        while (projectItemsDiv.firstChild) {
            projectItemsDiv.removeChild(projectItemsDiv.firstChild);
        }

        const projectDescription = document.querySelector('#main-project > p');
        if (projectItems.length == 0) {
            projectDescription.textContent = 'This project has no items';
            console.log(`${project.title} has no items`);
        } else {   
            projectDescription.textContent = project.description || 'This is your default project';

            for (const item of projectItems) {
                if (!item) continue;
                projectItemsDiv.appendChild(createItemView(item));
            }
        }
    });

    return projectDiv;
}