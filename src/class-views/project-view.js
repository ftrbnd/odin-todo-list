import createItemView from "./item-view";

export default function createProjectView(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const h3 = document.createElement('h3');
    h3.textContent = project.title;
    h3.classList.add('title');
    projectDiv.appendChild(h3);

    projectDiv.addEventListener('click', () => {
        if (localStorage.getItem('main-project-id') == project.id) { // project is already being displayed
            return console.log(`The same project was selected. (${project.title})`);
        }
        console.log(`Project "${project.title}" was selected`);
        localStorage.setItem('main-project-id', project.id);

        const mainProjectHeader = document.querySelector('#main-project > h2');
        mainProjectHeader.textContent = project.title;
        const mainProjectDescription = document.querySelector('#main-project > p');
        mainProjectDescription.textContent = project.description;

        const projectItemsDiv = document.querySelector('div#todo-items');
        while (projectItemsDiv.firstChild) {
            projectItemsDiv.removeChild(projectItemsDiv.firstChild);
        }
        
        const projectItems = JSON.parse(localStorage.getItem(project.id)).items;
        console.log(projectItems);
        for (let item of projectItems) {
            if (!item) continue;
        
            item = JSON.parse(item);
            projectItemsDiv.appendChild(createItemView(item));
        }
    });
    return projectDiv;
}