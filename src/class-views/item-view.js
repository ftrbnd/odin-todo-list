/* eslint-disable no-undef */
import dateFormat from "dateformat";
import { updateCompletedCount } from "../ui/completed";

export default function createItemView(item) {
    const itemDiv = createItemDiv(item);
    
    itemDiv.addEventListener('click', () => { // toggle description and priority visibility
        console.log(`Item "${item.title}" was clicked`);
        localStorage.setItem('current-active-item', item.id);

        const allItems = document.querySelectorAll('.item');
        for (const item of allItems) {
            if (item == itemDiv) continue;

            item.style.color = '#5e5e5e';
            item.children[2].style.display = 'none';
            item.children[4].style.display = 'none';
        }
        const description = itemDiv.children[2];
        description.style.display = description.style.display == 'none' ? 'block' : 'none';
        description.style.color = '#5e5e5e';

        const priority = itemDiv.children[4];
        priority.style.display = priority.style.display == 'none' ? 'block' : 'none';

        switch (item.priority) {
            case 1:
            case '1':
                priority.style.color = 'green';
                break;
            case 2:
            case '2':
                priority.style.color = 'yellow';
                break;
            case 3:
            case '3':
                priority.style.color = 'red';
                break;
        }
    });

    itemDiv.addEventListener('mouseover', () => {    
        if (item.id == localStorage.getItem('current-active-item')) return;

        itemDiv.style.color = itemDiv.style.color == 'white' ? '#5e5e5e' : 'white';
    });

    itemDiv.addEventListener('mouseout', () => {
        if (item.id == localStorage.getItem('current-active-item')) return;

        itemDiv.style.color = itemDiv.style.color == '#5e5e5e' ? 'white' : '#5e5e5e';
    });

    return itemDiv;
}

function createItemDiv(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const uncheckedBox = document.createElement('img');
    uncheckedBox.src = '../assets/checkbox-blank-outline-custom.png'
    uncheckedBox.classList.add('unchecked');
    attachCheckboxListeners(uncheckedBox, item, itemDiv);

    const title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('title');
    title.style.display = 'block';

    const desc = document.createElement('h4');
    desc.textContent = item.description;
    desc.style.fontStyle = 'italic'
    desc.style.fontWeight = 'normal';
    desc.classList.add('desc');
    desc.style.display = 'none';

    const dueDate = document.createElement('h4');
    dueDate.textContent = dateFormat(new Date(item.dueDate), "mm/dd/yy, h:MM TT");
    dueDate.style.fontWeight = 'normal';
    dueDate.classList.add('dueDate');
    dueDate.style.display = 'block';

    const priority = document.createElement('h4');
    priority.textContent = `Priority level: ${item.priority}`
    priority.style.fontWeight = 'normal';
    priority.classList.add('priority');
    priority.style.display = 'none';

    const editIcon = document.createElement('img');
    editIcon.src = '../assets/pencil-outline-dark.png';
    editIcon.classList.add('edit');
    attachEditListeners(editIcon, item, itemDiv);

    const removeIcon = document.createElement('img');
    removeIcon.src = '../assets/trash-can-dark.png';
    removeIcon.classList.add('remove');
    attachRemoveListeners(removeIcon, item, itemDiv);

    itemDiv.appendChild(uncheckedBox);
    itemDiv.appendChild(title);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(dueDate);
    itemDiv.appendChild(priority);
    itemDiv.appendChild(editIcon);
    itemDiv.appendChild(removeIcon);

    return itemDiv;
}

function attachCheckboxListeners(checkBox, item, itemDiv) {
    checkBox.addEventListener('mouseover', () => {
        if (checkBox.classList.contains('checked')) return;
        checkBox.src = '../assets/checkbox-intermediate-variant-custom.png'
    });

    checkBox.addEventListener('mouseout', () => {
        if (checkBox.classList.contains('checked')) return;
        checkBox.src = '../assets/checkbox-blank-outline-custom.png'
    });

    checkBox.addEventListener('click', event => {
        event.stopPropagation();
        checkBox.src = '../assets/checkbox-marked-custom.png';
        checkBox.classList.add('checked');
        console.log(`Marking "${item.title}" as completed...`);
    
        itemDiv.remove();
        removeItemFromProject(item);

        let completedItemIds = localStorage.getItem('completed-items');
        if (!completedItemIds) {
            localStorage.setItem('completed-items', `${item.id},`);
        } else {
            completedItemIds = completedItemIds += `${item.id},`;
            localStorage.setItem('completed-items', completedItemIds);
        }

        const completedCount = document.querySelector('div#completed > h3');
        completedItemIds = completedItemIds.split(',');
        completedCount.textContent = updateCompletedCount(completedItemIds);
    });
}

function attachEditListeners(editIcon, item, itemDiv) {
    editIcon.addEventListener('mouseover', event => {
        event.stopPropagation();

        editIcon.src = '../assets/pencil-outline-white.png';
    });

    editIcon.addEventListener('mouseout', event => {
        event.stopPropagation();

        editIcon.src = '../assets/pencil-outline-dark.png';
    });

    editIcon.addEventListener('click', event => {
        event.stopPropagation();
        console.log(`Editing item "${item.title}"...`);

        localStorage.setItem('current-active-item', item.id);
        const editItemForm = document.querySelector('form#edit');

        const editTitle = document.querySelector('input#new_title');
        editTitle.value = item.title;
        const editDescription = document.querySelector('input#new_desc');
        editDescription.value = item.description;
        const editDate = document.querySelector('input#new_due');
        editDate.value = item.dueDate.substring(0, 16); // make this work properly
        const editPriority = document.querySelector('input#new_priority');
        editPriority.value = item.priority;

        if (!editItemForm.style.display) {
            editItemForm.style.display = 'flex';
        } else {
            editItemForm.removeAttribute('style');
        }
    });
}

function attachRemoveListeners(removeIcon, item, itemDiv) {
    removeIcon.addEventListener('mouseover', event => {
        event.stopPropagation();

        removeIcon.src = '../assets/trash-can-white.png';
    });

    removeIcon.addEventListener('mouseout', event => {
        event.stopPropagation();
        
        removeIcon.src = '../assets/trash-can-dark.png';
    });

    removeIcon.addEventListener('click', event => {
        event.stopPropagation();
        console.log(`Removing item "${item.title}"...`);

        itemDiv.remove();
        localStorage.removeItem(item.id);
        removeItemFromProject(item);
    });
}

function removeItemFromProject(item) {
    const currentProjectId = localStorage.getItem('main-project-id');
    const currentProject = JSON.parse(localStorage.getItem(currentProjectId));
    currentProject.items.splice(currentProject.items.indexOf(item.id), 1);
    localStorage.setItem(currentProjectId, JSON.stringify(currentProject));
}