export default function createItemView(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('title');

    const desc = document.createElement('h4');
    desc.textContent = item.description;
    desc.classList.add('desc');

    const dueDate = document.createElement('h4');
    dueDate.textContent = `Due date: ${item.dueDate}`;
    dueDate.classList.add('dueDate');

    const priority = document.createElement('h4');
    priority.textContent = `Priority level: ${item.priority}`
    priority.classList.add('priority');

    itemDiv.appendChild(title);
    itemDiv.appendChild(desc);
    itemDiv.appendChild(dueDate);
    itemDiv.appendChild(priority);

    itemDiv.addEventListener('click', openSelectedItem);

    return itemDiv;
}

function openSelectedItem(event) {
    event.stopPropagation();
    console.log(`${event.target.tagName} was selected`);

    // if (event.target.tagName == 'H3' || event.target.tagName == 'H4') {
    // }

    // const mainDisplayProject = document.querySelector('div#default');
}