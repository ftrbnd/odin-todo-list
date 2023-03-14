export default function loadHeader() {
    const header = document.querySelector('div#header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Todo List';

    header.appendChild(h1);
}