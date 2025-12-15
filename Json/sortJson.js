const todos = [{title: 'Order cat food', completed: true},
{title: 'clean kitchen', completed: false},
{title: 'Buy food', completed: true},
{title: 'Do work', completed: true},
{title: 'Exercise', completed: false}]

const sortTodos = function(todos) {
  todos.sort(function(a,b) {
      if (!a.completed&& b.completed) {
          return -1
      } else if (a.completed && !b.completed) {
          return 1;
      } else {
          return 0;
      }
  })
}

function sortArrayFun (todos) {
  todos.sort((a,b) => {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  })
}
sortArrayFun (todos)
console.log(todos)

//const sortTask = sortTodos(todos);
//console.log(todos);