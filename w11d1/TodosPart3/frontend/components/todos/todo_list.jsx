import React from 'react'
import TodoForm from '../todo_list/todo_form'
import TodoListItem from '../todo_list/todo_list_item'
// export default () => <h3>Todo List goes here!</h3>

const todoList = (props) => {
    // console.log(props)
    // props.fetchTodos()

    return (
        <div>
            <h3>All your todos</h3>
            <ul>
                {props.todos.map((todo) => 
                     <TodoListItem key = {todo.id} 
                     title = {todo.title} 
                     body = {todo.body} 
                     done = {todo.done} 
                     receiveTodo = {props.receiveTodo} 
                     removeTodo = {props.removeTodo}/>)}
            </ul>
            <TodoForm receiveTodo={props.receiveTodo} 
            fetchTodos={props.fetchTodos}
            createTodo={props.createTodo} 
            />
        </div>
    )
}

export default todoList