const JSONStore = require("jsonstore-js");
var storeData = {
    name: 'A store',
    books: [
        {id: 'book1', name: 'colors', content: ['red', 'green', 'blue']},
        {id: 'book2', name: 'fruits', content: ['apple', 'orange', 'lemon']}
    ]
};
var store = new JSONStore({
    store: storeData
});
console.log(store.initialOptions);
console.log(store.copyStore);
console.log(store.store);
console.log(store.cacheKeys,store.flashKeys);
store.add("books", "book3").exchange(["books", 0], ["books", 2]);
console.log(store.get("books"));
