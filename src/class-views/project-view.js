import createItemView from "./item-view";

export default function createProjectView(project) {
    const projectDiv = createProjectDiv(project);

    projectDiv.addEventListener('click', () => {
        if (localStorage.getItem('main-project-id') == project.id) { // project is already being displayed
            return console.log(`The same project was selected. (${project.title})`);
        }
        console.log(`Project "${project.title}" was selected`);
        localStorage.setItem('main-project-id', project.id);

        const allProjects = document.querySelectorAll('.project');
        for (const project of allProjects) {
            if (project == projectDiv) continue;

            project.style.color = '#5e5e5e';
        }
        projectDiv.style.color = 'white';

        const mainProjectHeader = document.querySelector('#main-project > h2');
        mainProjectHeader.textContent = project.title;
        const mainProjectDescription = document.querySelector('#main-project > p');
        mainProjectDescription.textContent = project.description;

        const projectItemsDiv = document.querySelector('div#todo-items');
        while (projectItemsDiv.firstChild) {
            projectItemsDiv.removeChild(projectItemsDiv.firstChild);
        }
        
        const projectItems = JSON.parse(localStorage.getItem(project.id)).items;
        for (const itemId of projectItems) {
            console.log('current item: ', itemId);
            if (!itemId) continue;
        
            const item = JSON.parse(localStorage.getItem(itemId));
            console.log(item);
            projectItemsDiv.appendChild(createItemView(item));
        }
    });

    projectDiv.addEventListener('mouseover', () => {    
        if (localStorage.getItem('main-project-id') == project.id) return;

        projectDiv.style.color = projectDiv.style.color == 'white' ? '#5e5e5e' : 'white';
    });

    projectDiv.addEventListener('mouseout', () => {
        if (localStorage.getItem('main-project-id') == project.id) return;

        projectDiv.style.color = projectDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';
    });

    return projectDiv;
}

function createProjectDiv(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const h3 = document.createElement('h3');
    h3.textContent = project.title;
    h3.classList.add('title');
    projectDiv.appendChild(h3);

    if (project.id == localStorage.getItem('main-project-id'))
        projectDiv.style.color = 'white';
    
    return projectDiv;
}