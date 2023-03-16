import createItemView from "./item-view";

export default function createProjectView(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const h3 = document.createElement('h3');
    h3.textContent = project.title;
    h3.classList.add('title');

    const h4 = document.createElement('h4');
    h4.textContent = project.description;
    h4.classList.add('desc');

    projectDiv.appendChild(h3);
    projectDiv.appendChild(h4);

    projectDiv.addEventListener('click', () => {
        console.log(`${project.title} was selected`);

        const projectName = document.querySelector('#main-project > h2');
        projectName.textContent = project.title;

        const projectItems = document.querySelector('div#todo-items');

        if (project.items.length == 0) {
            while (projectItems.firstChild) {
                projectItems.removeChild(projectItems.firstChild);
            }

            return console.log(`${project.title} has no items`);
        }

        for (const item of project.items) {
            projectItems.appendChild(createItemView(item));
        }
    });

    return projectDiv;
}