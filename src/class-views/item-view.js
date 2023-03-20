import dateFormat from "dateformat";

export default function createItemView(item) {
    const itemDiv = createItemDiv(item);
    itemDiv.addEventListener('click', () => { // toggle description and priority visibility
        console.log(`Item "${item.title}" was clicked`);

        const description = itemDiv.children[1];
        description.style.display = description.style.display == 'none' ? 'block' : 'none';

        const priority = itemDiv.children[3];
        priority.style.display = priority.style.display == 'none' ? 'block' : 'none';
    });

    return itemDiv;
}

function createItemDiv(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

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

    itemDiv.appendChild(title);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(dueDate);
    itemDiv.appendChild(priority);

    return itemDiv;
}