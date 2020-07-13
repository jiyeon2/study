const form = document.querySelector('.control-form');
const foodList = document.querySelector('.muket-list');
const items = [];

const input = form.querySelector('.text-input');
const addButton = form.querySelector('.add-button');

function initList(){
    const list = JSON.parse(localStorage.getItem('muketList'));
    list.forEach(item => items.push(item));
    createList(list);
}
initList();

function createList(list) {
    const html = list.map((item, index) => {
        const id = `${item.name}_${index}`;
        return `
        <li>
            <input type="checkbox" id="${id}" ${item.done ?'checked':''}>
            <label for="${id}">${item.name}</label>
        </li>
        `;
    }).join('');
    foodList.innerHTML = html;
}

function addItem(e) {
    e.preventDefault();
    const foodName = input.value;
    if (!foodName) return;
    items.push({name:foodName, done: false});
    localStorage.setItem('muketList',JSON.stringify(items));
    input.value = '';
    createList(items);
}

addButton.addEventListener('click', addItem);
