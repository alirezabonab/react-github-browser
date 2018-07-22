import * as ActionTypes from './actionTypes'
import {getRepositories} from '../service/repository'

function getRepositoriesExecuting() {
    return {
        type: ActionTypes.GET_REPOSITORY_EXECUTING,
        payload: {
            repositories : [], 
            isExecuting: true,
            error: ''
        }
    };
}

function getRepositoriesSuccessful(items) {
    return {
        type: ActionTypes.GET_REPOSITORY_SUCCESS,
        payload: {
            isExecuting: false,
            repositories : items,
            error: ''
        }
    };
}

function getRepositoriesFail(error) {
    return {
        type: ActionTypes.GET_REPOSITORY_FAIL,
        payload: {
            repositories : [],
            isExecuting: false,
            error: error
        }
    };
}



export function getRepositoriesByUsername(username) {
    return function (dispatch) {
        dispatch(getRepositoriesExecuting())

        return getRepositories(username)
            .then(response => {
                dispatch(getRepositoriesSuccessful(response));
            }).catch(error => {
                dispatch(getRepositoriesFail(error));
            });
    };
}


export function setSelectedRepository(repository){
    return {
        type: ActionTypes.SET_SELECTED_REPOSITORY,
        selectedRepository : repository,
    };
}