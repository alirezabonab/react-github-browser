import {combineReducers} from 'redux'
import commit from './commit'
import repository from './repository'


export default combineReducers({
    repository,
    commit
})