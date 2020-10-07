import moduleCart from './main.js';

const goods = [
    { name: 'apple', price: 20 },
    { name: 'mango', price: 50 },
    { name: 'potato', price: 15 },
    { name: 'strawberry', price: 60 },
    { name: 'cucumber', price: 18 },
];

const goodsRoot = document.querySelector('.goods');
const goodsList = document.createElement('ul');
goodsRoot.appendChild(goodsList);

const choosenList = document.createElement('ul');
goodsRoot.appendChild(choosenList);

const btnPrototype = function(name) {
    const button = document.createElement('button');
    button.innerText = name;
    button.onclick = function() {
        const choosenItemName = this.parentNode.id;
        console.log(this.parentNode.id);
        const choosenItem = document.createElement('li');
        choosenItem.innerText = choosenItemName;
        choosenList.appendChild(choosenItem);
    };

    return button;
};

const showItems = function(products) {
    for (const item of products) {
        const listItem = document.createElement('li');
        listItem.id = item.name;
        const btn = btnPrototype('Add item');
        listItem.innerText = item.name;
        goodsList.appendChild(listItem);
        listItem.appendChild(btn);
    }
};

showItems(goods);