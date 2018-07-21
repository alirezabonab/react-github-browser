import {GET_REPOSITORY_EXECUTING,  
    GET_REPOSITORY_SUCCESS,    
    GET_REPOSITORY_FAIL,
       } from '../../actions/actionTypes'

var initialState = {
    isExecuting: false,
    repositories: [],
    error: ''
};


export default function RepositoryReducer(state = initialState, action) {
    let newState = state
    switch (action.type){
        case GET_REPOSITORY_EXECUTING :
            newState = {...state , ...action.payload};
            break
        case GET_REPOSITORY_SUCCESS :
            newState = {...state , ...action.payload};
            break
        case GET_REPOSITORY_FAIL :
            newState = {...state , ...action.payload};
            break
    }
    return newState;
}