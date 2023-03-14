export default function loadDefaultProject() {
    const defaultProject = document.querySelector('div#default');

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'main-project');

    const projectName = document.createElement('h2');
    projectName.textContent = 'Default Project';
    projectHeader.appendChild(projectName);

    const newItemButton = document.createElement('button');
    newItemButton.id = 'new-item';
    newItemButton.textContent = 'New';
    projectHeader.appendChild(newItemButton);

    defaultProject.appendChild(projectHeader);

    // const projectItems = document.createElement('div');
    // projectItems.id = 'todo-items';
}