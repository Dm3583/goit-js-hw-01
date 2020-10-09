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
choosenList.classList = 'choosen-items-list';

const choosenGoods = moduleCart.items;

// for(const choosenGoods.name  )

console.log(choosenGoods);

const addItem = function() {
    const choosenItemName = this.parentNode.id;
    console.log(this.parentNode.id);
    const choosenItem = document.createElement('li');
    choosenItem.innerText = choosenItemName;
    choosenList.appendChild(choosenItem);
};

const btnPrototype = function(name, callback) {
    const button = document.createElement('button');
    button.innerText = name;
    button.onclick = callback;
    return button;
};

const showItems = function(products) {
    for (const item of products) {
        const listItem = document.createElement('li');
        listItem.id = item.name;
        const btnAddItem = btnPrototype('Add item', addItem);

        listItem.innerText = item.name;
        goodsList.appendChild(listItem);
        listItem.appendChild(btnAddItem);
    }
};

showItems(goods);