const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    putItem(item) {
        for (const prod of this.items) {
            if (prod.name === item.name) {
                prod.quantity += 1;
                console.log("add");
                return;
            }
        }
        item.quantity = 1;
        this.items.push(item);
        console.log("push");

    },
    removeItem(itemName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (itemName === this.items[i].name) {
                this.items.splice(i, 1);
            }
        }
    },
    addItem(itemName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (itemName === this.items[i].name) {
                this.items[i].quantity += 1;
            }
        }
    },
    subtractItem(itemName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (itemName === this.items[i].name) {
                this.items[i].quantity -= 1;
            }
        }
    },
    totalPrice() {
        let total = 0;
        for (const item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    },
    clear() {
        this.items = [];
    },
};

console.log(cart.getItems());

// console.log(cart.putItem({ name: 'apple', price: 20 }));
// console.log(cart.putItem({ name: 'apple', price: 20 }));

// console.log(cart.putItem({ name: 'mango', price: 30 }));
// console.log(cart.putItem({ name: 'apple', price: 20 }));
// console.log(cart.putItem({ name: 'potato', price: 15 }));
// console.log(cart.putItem({ name: 'cucumber', price: 100 }));
// console.log(cart.getItems());
// console.log(cart.getItems().length);
// cart.addItem('mango');
// cart.addItem('mango');
// cart.addItem('mango');
// cart.addItem('mango');
// cart.addItem('cucumber');
// cart.addItem('cucumber');
// // console.table(cart.getItems());
// cart.clear();
// console.log(cart.totalPrice());

// cart.removeItem('mango');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.putItem({ name: 'apple', price: 20 }));
// console.log(cart.putItem({ name: 'apple', price: 20 }));

// console.log(cart.putItem({ name: 'mango', price: 30 }));
// console.log(cart.putItem({ name: 'apple', price: 20 }));
// console.log(cart.putItem({ name: 'potato', price: 15 }));
// console.log(cart.putItem({ name: 'cucumber', price: 100 }));

// console.table(cart.getItems());

// console.log(cart.totalPrice());

export default cart;