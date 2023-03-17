export default function loadDefaultProject() {
    const defaultProject = document.querySelector('div#default');
    const newItemForm = document.querySelector('form#new-item');

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'main-project');

    const projectName = document.createElement('h2');
    const storageDefaultProjectName = localStorage.getItem('default-project-name');
    if (storageDefaultProjectName) {
        projectName.textContent = storageDefaultProjectName;
    } else {
        projectName.textContent = 'Default Project';
    }
    projectHeader.appendChild(projectName);

    const projectDescription = document.createElement('p');
    const storageDefaultProjectDesc = localStorage.getItem('default-project-desc');
    if (storageDefaultProjectDesc) {
        projectDescription.textContent = storageDefaultProjectDesc;
    } else {
        projectDescription.textContent = 'This is your default project';
    }

    const newItemButton = document.createElement('button');
    newItemButton.id = 'new-item';
    newItemButton.textContent = 'New';
    projectHeader.appendChild(projectDescription);

    newItemButton.addEventListener('click', revealNewItemForm);

    projectHeader.appendChild(newItemButton);

    defaultProject.insertBefore(projectHeader, newItemForm);

    const projectItems = document.createElement('div');
    projectItems.setAttribute('id', 'todo-items');
    defaultProject.appendChild(projectItems);

    let items;
    try {
        items = localStorage.getItem('default-project-items').split(',');
    } catch (e) {
        return console.log('localStorage found no items.');
    }

    for (const item of items) {
        // create a div for this item and add it to projectItems div
    }
}

function revealNewItemForm() {
    const newItemForm = document.querySelector('form#new-item');

    console.log('newItemButton click');
    if (!newItemForm.style.display) {
        newItemForm.style.display = 'flex';
    } else {
        newItemForm.removeAttribute('style');
    }
}