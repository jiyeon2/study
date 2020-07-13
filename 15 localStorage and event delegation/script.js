const form = document.querySelector('.control-form');
const foodList = document.querySelector('.muket-list');
const items = [];

const input = form.querySelector('.text-input');
const addButton = form.querySelector('.add-button');

function initList(){
    const list = JSON.parse(localStorage.getItem('muketList')) || [];
    list.forEach(item => items.push(item));
    createList(list);
}
initList();


function updateLocalStorage(){
    localStorage.setItem('muketList',JSON.stringify(items));
}
foodList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'INPUT'){
        items[target.id].done = target.checked;
        updateLocalStorage();
    }
})
function createList(list) {
    const html = list.map((item, index) => {
        return `
        <li>
            <input type="checkbox" id="${index}" ${item.done ?'checked':''}>
            <label for="${index}">${item.name}</label>
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
    updateLocalStorage();
    input.value = '';
    createList(items);
}

addButton.addEventListener('click', addItem);
