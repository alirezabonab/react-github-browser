import {GET_REPOSITORY_EXECUTING,  
    GET_REPOSITORY_SUCCESS,    
    GET_REPOSITORY_FAIL,
    SET_REPOSITORY_SELECTED_ITEM,
       } from '../../actions/repositoryActionTypes'

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
        case SET_REPOSITORY_SELECTED_ITEM : 
            newState = {...state , selectedRepository : action.selectedRepository}
            break
    }
    return newState;
}