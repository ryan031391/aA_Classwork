import React from 'react'
import ReactDOM from 'react-dom'
import { receiveTodo, receiveTodos, fetchTodos} from './actions/todo_actions'
import Root from './components/root'
import configureStore from './store/store'
import { selectTodos } from './reducers/selectors'
// import { fetchTodos } from './util/todo_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore()
    window.store = store
    window.selectTodos = selectTodos
    window.receiveTodo = receiveTodo
    window.receiveTodos = receiveTodos
    window.fetchTodos = fetchTodos

    ReactDOM.render(<Root store = {store} />, root);
})


// document.addEventListener("DOMContentLoaded", function(){
//   window.reducer = reducer
//   ReactDOM.render(<Widget store={store} />, document.getElementById('root'));
// });
