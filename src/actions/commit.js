import * as ActionTypes from './commitActionTypes'
import {getCommits} from '../service/commit'

function getCommitsExecuting() {
    return {
        type: ActionTypes.GET_COMMIT_EXECUTING,
        payload: {
            commits : [], 
            isExecuting: true,
            error: ''
        }
    };
}

function getCommitsSuccessful(items) {
    return {
        type: ActionTypes.GET_COMMIT_SUCCESS,
        payload: {
            isExecuting: false,
            commits : items,
            error: ''
        }
    };
}

function getCommitsFail(error) {
    return {
        type: ActionTypes.GET_COMMIT_FAIL,
        payload: {
            commits : [],
            isExecuting: false,
            error: error
        }
    };
}



export function getCommitsByRepository(username , repoName) {
    return function (dispatch) {
        dispatch(getCommitsExecuting())

        return getCommits(username , repoName)
            .then(response => {
                dispatch(getCommitsSuccessful(response));
            }).catch(error => {
                dispatch(getCommitsFail(error));
            });
    };
}

