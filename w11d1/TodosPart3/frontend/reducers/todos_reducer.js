import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from "../actions/todo_actions"

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_TODOS:
            let nextState_1 = {};
            action.todos.forEach((ele) => {
                nextState_1[ele.id] = ele;
            })
            return nextState_1;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            // let idx = state.indexOf(action.todo);
            // return [...state.slice(0, idx), ...state.slice(idx + 1)];
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }
} 

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};


export default todosReducer;