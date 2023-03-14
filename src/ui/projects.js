export default function loadProjectsList() {
    const projectsContainer = document.querySelector('div#projects');

    const projectsHeader = document.createElement('div');
    projectsHeader.setAttribute('id', 'projects-header');

    const h2 = document.createElement('h2');
    h2.textContent = 'My Projects';
    projectsHeader.appendChild(h2);

    const newProjectButton = document.createElement('button');
    newProjectButton.id = 'new-project';
    newProjectButton.textContent = 'New';
    projectsHeader.appendChild(newProjectButton);

    projectsContainer.appendChild(projectsHeader);

    const projects = [];
    for (const project of projects) {
        // add to container div
    }
}