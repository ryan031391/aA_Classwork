import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP} from "../actions/step_actions"

const stepsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_STEPS:
            let nextState_1 = {};
            action.todos.forEach((ele) => {
                nextState_1[ele.id] = ele;
            })
            return nextState_1;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            nextState[action.todo.id] = {};
            return nextState;
        default:
            return state;
    }
} 

export default stepsReducer;