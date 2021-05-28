import {combineReducers} from "redux";
import entitiesReducers from "./entities_reducer";

const rootReducer = combineReducers ({
    entities: entitiesReducers,
})

export default rootReducer;