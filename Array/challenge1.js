// Example#1
const todos = [{title: 'Order cat food', completed: true},
{title: 'clean kitchen', completed: false}, 
{title: 'Buy food', completed: true},
{title: 'Do work', completed: true},
{title: 'Exercise', completed: false}]

// 1. Sort by boolean completed : incomplted (false) first then completed (true)
const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        //if (!a.completed&& b.completed) {  // Option1.
        if (!a.completed) {                  // Option2.   
            return -1
        //} else if (a.completed && !b.completed) {  // Option1.
        } else if (a.completed) {                    // Option2.   
            return 1;
        } else {
            return 0;
        }
    })
}

console.log("#1 Before Sort by boolean completed");
console.log(todos);
sortTodos(todos);  // sort: 1. completed: false  2. completed: true
console.log("After Sort by boolean completed false -> true");
console.log(todos);


// 2. Sort: by title 
const sortTodoByTitle = (todos) => {
    todos.sort((a,b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()

        if (titleA < titleB) {
            return -1  // nameA comes first
        } else if (titleA > titleB) {
            return 1  // nameB comes first
        } else {
            return 0  
        }
    })
}
console.log("#2 After Sort By Title");
const sortTitle = sortTodoByTitle(todos)
console.log(todos)

// Example#2
const inventory = [
    { name: 'Bike Light', price: 9.99 },
    { name: 'Backpack', price: 29.99 },
    { name: 'T-Shirt', price: 15.99 },
    { name: 'Seahawks Jersey', price: 11.99 }
];

// 3. Sort by Price 
const sortInventoryByPrice = (inventory) => {
    inventory.sort((a,b) => {
        if (a.price < b.price) return -1
        else if (a.price > b.price) return 1
        else return 0
    })
}

console.log("#3 Before Sort by Inventory Price");
console.log(inventory)
sortInventoryByPrice(inventory)
console.log("3. After Sort by inventory price");
console.log(inventory)

// 4. Sort Inventory by name 
const sortByInventoryName = function(inventory) {
    inventory.sort((a,b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return -1 
        else if (nameA > nameB) return 1
        else return 0
    })
}

sortByInventoryName(inventory)
console.log("4. After Sort by inventory name");
console.log(inventory)

// Note: Arrays are passed by reference
// Array splice method: deletes the item at the index specified by deleteIndex and shifts all subsequent items to fill the gap
const deleteTodo = function (todos, deleteTitle) {
    const deleteIndex = todos.findIndex(function (todo) {
        return todo.title.toLowerCase() ===deleteTitle.toLowerCase();
    })
    if (deleteIndex >-1) {
       return todos.splice(deleteIndex,1);
    }
}

// Array Test#1: findIndex
console.log(' --------  Pass By reference -------- ') 
console.log(todos);  // original array
const removedItem = deleteTodo (todos, 'buy food') 
console.log('Deleted Object Item',removedItem)  // Removed Item
console.log('1. After Remove Item - with slice')
console.log(todos);  // after removed item array

// Array Test#2: filter
//console.log(todos);  // original array
const getThingsToDo = function (todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}
console.log('2. After filter with false completed')
console.log(getThingsToDo(todos));

// Option1: Implicit return for a single expression
// console.log(todos);  // original array
// const getThingsToDo1 = (todos) => {
//     return todos.filter(todo => todo.completed)
// }

// Option2: Implicit return for a single expression
const getThingsToDo1 = (todos) => todos.filter(todo => todo.completed)

console.log('3. After filter with true completed')
console.log(getThingsToDo1(todos));

// Option3: Implicit return for a single expression with find method
// return todos.find(todo => todo.completed)
const getThingsToDo2= (todos) => {
    return todos.find(function(todo) {
        return todo.completed
    })
}
console.log(getThingsToDo2(todos));
console.log(todos);
//console.log(getThingsToDo1(todos));
