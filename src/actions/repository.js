import * as ActionTypes from './repositoryActionTypes'
import {getRepositories} from '../service/repository'
import {getCommitsByRepository} from './commit'

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
        dispatch(setSelectedRepository(null))
        dispatch(getRepositoriesExecuting())
        return getRepositories(username)
            .then(response => {
                dispatch(getRepositoriesSuccessful(response));
            }).catch(error => {
                dispatch(getRepositoriesFail(error));
            });
    };
}


export function setSelectedRepository(repo){
    return function (dispatch) {
        
        if(repo)
            dispatch(getCommitsByRepository(repo.owner.login , repo.name))

        dispatch( {
            type: ActionTypes.SET_REPOSITORY_SELECTED_ITEM,
            selectedRepository : repo,
        });
    };
   
}