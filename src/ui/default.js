export default function loadDefaultProject() {
    const defaultProject = document.querySelector('div#default');
    const newItemForm = document.querySelector('form#new-item');

    const projectHeader = document.createElement('div');
    projectHeader.setAttribute('id', 'main-project');

    const projectName = document.createElement('h2');
    projectName.textContent = 'Default Project';
    projectHeader.appendChild(projectName);

    const newItemButton = document.createElement('button');
    newItemButton.id = 'new-item';
    newItemButton.textContent = 'New';

    newItemButton.addEventListener('click', revealNewItemForm);

    projectHeader.appendChild(newItemButton);

    defaultProject.insertBefore(projectHeader, newItemForm);

    // const projectItems = document.createElement('div');
    // projectItems.id = 'todo-items';
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