/* eslint-disable no-undef */
import dateFormat from "dateformat";

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

    itemDiv.appendChild(uncheckedBox);
    itemDiv.appendChild(title);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(dueDate);
    itemDiv.appendChild(priority);

    return itemDiv;
}