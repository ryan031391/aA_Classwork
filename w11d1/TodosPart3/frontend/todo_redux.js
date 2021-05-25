
import configureStore from "./store/store"
import {receiveTodo, receiveTodos, removeTodo} from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo
})