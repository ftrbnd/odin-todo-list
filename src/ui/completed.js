import { createCompletedItemView } from "../class-views/item-view";

export function displayCompleted() {
    const completedDiv = document.querySelector('div#completed');

    const h2 = document.createElement('h2');
    h2.textContent = 'Completed';
    completedDiv.appendChild(h2);

    let completedItemIds = localStorage.getItem('completed-items');
    if (completedItemIds)
        completedItemIds = completedItemIds.split(',');

    const countDescription = document.createElement('h3');
    countDescription.textContent = updateCompletedCount(completedItemIds);
    countDescription.style.paddingLeft = '8px';

    countDescription.addEventListener('click', () => {
        console.log('Showing completed items...', completedItemIds);
        
        const completedHidden = localStorage.getItem('completed-hidden') ?? 'true';
        toggleCompletedItems(completedHidden, completedItemIds, completedDiv);
    });

    completedDiv.appendChild(countDescription);
}

function toggleCompletedItems(completedHidden, completedItemIds, completedDiv) {
    if (completedHidden == 'true') {
        for (const itemId of completedItemIds) {
            if (!itemId) continue;
            
            const item = JSON.parse(localStorage.getItem(itemId));
            console.log('Found an item: ', item);

            const completedItemDiv = createCompletedItemView(item);
            completedDiv.appendChild(completedItemDiv);

            localStorage.setItem('completed-hidden', 'false');
        }
    } else {
        const completedItems = document.querySelectorAll('div.completed');
        for (const item of completedItems) {
            item.remove();
        }
        localStorage.setItem('completed-hidden', 'true');
    }
}

export function updateCompletedCount(completedItemIds) {
    let description, completedCount = 0;
    if (!completedItemIds) {
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