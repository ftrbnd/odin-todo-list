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

    projectDiv.addEventListener('click', openSelectedProject);

    return projectDiv;
}

function openSelectedProject(event) {
    event.stopPropagation();
    console.log(`${event.target.tagName} was selected`);

    // if (event.target.tagName == 'H3' || event.target.tagName == 'H4') {
    // }

    // const mainDisplayProject = document.querySelector('div#default');
}