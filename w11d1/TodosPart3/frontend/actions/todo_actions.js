import * as todoAPIUtil from '../util/todo_api_util'
export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo
    }
}

export const receiveTodos = (todos) => ({
        type: RECEIVE_TODOS,
        todos
    })

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo: todo
    }
}

export const fetchTodos = () => {
    return (dispatch) => {
        return todoAPIUtil.fetchTodos()
            .then(todos => {
                dispatch(receiveTodos(todos))
            })
    }
}

export const createTodo = (todo) => 
     (dispatch) => {
        return todoAPIUtil.createTodo(todo)
            .then(todo => {
                dispatch(receiveTodo(todo))
            })
    }



