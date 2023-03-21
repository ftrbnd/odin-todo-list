export default function displayCompleted() {
    const completedDiv = document.querySelector('div#completed');

    const h2 = document.createElement('h2');
    h2.textContent = 'Completed';
    completedDiv.appendChild(h2);

    let completedItemIds = localStorage.getItem('completed-items');

    const countDescription = document.createElement('h3');
    countDescription.textContent = updateCompletedCount(completedItemIds);
    countDescription.style.paddingLeft = '8px';

    countDescription.addEventListener('click', () => {
        // show completed items
        console.log('Showing completed items...', completedItemIds);
        for (const itemId of completedItemIds) {
            if (!itemId) continue;

            // do stuff
            console.log(`Found a completed item: ${itemId}`);
        }
    });

    completedDiv.appendChild(countDescription);
}

function updateCompletedCount(completedItemIds) {
    let description;
    let completedCount = 0;
    if (!completedItemIds) {
        description = '0 items';
    } else {
        completedItemIds = completedItemIds.split(',');
        for (const itemId of completedItemIds) {
            if (!itemId) continue;

            completedCount += 1;
        }
        description = `${completedCount} items`;
    }

    return description;
}