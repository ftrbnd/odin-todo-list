import Project from '../classes/project';
import createProjectView from '../class-views/project-view';

export default function loadProjectsList() {
    const projectsSidebar = document.querySelector('div#projects');
    const newProjectForm = document.querySelector('form#new-project');

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

    const projectsDiv = document.createElement('div');
    projectsDiv.id = 'projects-list';
    projectsSidebar.appendChild(projectsDiv);

    let projects;
    try {
        projects = localStorage.getItem('user-projects').split(',');
    } catch (e) {
        return console.log('localStorage found no projects.');
    }
    console.log(`projects to load: ${projects}`);

    for (const projectId of projects) {
        if (projectId == 'null') continue;

        console.log(`cur project: ${projectId}`);
        projectsDiv.appendChild(createProjectView(new Project(
            localStorage.getItem(`project-${projectId}-name`),
            localStorage.getItem(`project-${projectId}-desc`)
        )));
    }
}

function revealNewProjectForm() {
    const newProjectForm = document.querySelector('form#new-project');

    console.log('newProjectButton click');
    if (!newProjectForm.style.display) {
        newProjectForm.style.display = 'flex';
    } else {
        newProjectForm.removeAttribute('style');
    }
}