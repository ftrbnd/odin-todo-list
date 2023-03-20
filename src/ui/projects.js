import Project from '../classes/project';
import createProjectView from '../class-views/project-view';

const projectsSidebar = document.querySelector('div#projects');
const newProjectForm = document.querySelector('form#new-project');

export default function loadProjectsList() {
    createHeader();

    const projectsListDiv = document.createElement('div');
    projectsListDiv.id = 'projects-list';
    projectsSidebar.appendChild(projectsListDiv);

    const projectIds = localStorage.getItem('user-projects').split(',');
    for (const projectId of projectIds) {
        if (!projectId) continue;
        
        const project = JSON.parse(localStorage.getItem(projectId));
        projectsListDiv.appendChild(createProjectView(new Project(
            project.id,
            project.title,
            project.description
        )));
    }
}

function createHeader() {
    const projectsHeader = document.createElement('div');
    projectsHeader.setAttribute('id', 'projects-header');

    const h2 = document.createElement('h2');
    h2.textContent = 'My Projects';
    projectsHeader.appendChild(h2);

    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'new-project';
    newProjectButton.textContent = 'New';
    newProjectButton.addEventListener('click', revealNewProjectForm);
    projectsHeader.appendChild(newProjectButton);

    projectsSidebar.insertBefore(projectsHeader, newProjectForm);
}

function revealNewProjectForm() {
    console.log('newProjectButton click');

    if (!newProjectForm.style.display) {
        newProjectForm.style.display = 'flex';
    } else {
        newProjectForm.removeAttribute('style');
    }
}