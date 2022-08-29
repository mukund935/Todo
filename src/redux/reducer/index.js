import {combineReducers} from 'redux'
import updateTodo from './updateTodo'

const rootReducer = combineReducers({
    todo:updateTodo
})

export default rootReducer;