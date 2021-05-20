const toDoItems = JSON.parse(localStorage.getItem('todos')) || [];
const todos = document.querySelector('.todos')

const addToDo = (e) => {
    e.preventDefault();
    let input = document.querySelector("input[name='add-todo']");
    let value = input.value;
    const todo = { value };
    toDoItems.push(todo);
    localStorage.setItem('todos', JSON.stringify(toDoItems));
    updateList();
    addToDoForm.reset();
    localStorage.clear();
}

const updateList = () => {
    console.log("I'm working!")
    todos.innerHTML = toDoItems.map((todo) => {
        return `<li><input type='checkbox'>${todo.value}</input></li>`;   
    }).join(" ");
}

const addToDoForm = document.querySelector(".add-todo-form");
addToDoForm.addEventListener("submit", addToDo)