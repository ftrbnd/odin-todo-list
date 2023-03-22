export function displayCompleted() {
    const completedDiv = document.querySelector('div#completed');

    const h2 = document.createElement('h2');
    h2.textContent = 'Completed';
    completedDiv.appendChild(h2);

    let completedItemIds = localStorage.getItem('completed-items');
    if (completedItemIds.length > 0)
        completedItemIds = completedItemIds.split(',');

    const countDescription = document.createElement('h3');
    countDescription.textContent = updateCompletedCount(completedItemIds);
    countDescription.style.paddingLeft = '8px';

    countDescription.addEventListener('click', () => {
        console.log('Showing completed items...', completedItemIds);
        for (const itemId of completedItemIds) {
            if (!itemId) continue;
            
            const item = JSON.parse(localStorage.getItem(itemId));
            console.log('Found an item: ', item);

            // create item view for a completed item
            // add it to completed tab - on default div?
        }
    });

    completedDiv.appendChild(countDescription);
}

export function updateCompletedCount(completedItemIds) {
    let description, completedCount = 0;
    if (completedItemIds.length == 1) {
        description = '0 items';
    } else {
        for (const itemId of completedItemIds) {
            if (!itemId) continue;
            completedCount += 1;
        }
        description = `${completedCount} items`;
    }

    return description;
}