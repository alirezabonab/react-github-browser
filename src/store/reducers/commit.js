import {GET_COMMIT_EXECUTING,  
    GET_COMMIT_SUCCESS,    
    GET_COMMIT_FAIL,
    SET_COMMIT_SELECTED_ITEM,
       } from '../../actions/commitActionTypes'

var initialState = {
    isExecuting: false,
    repositories: [],
    error: ''
};


export default function CommitReducer(state = initialState, action) {
    let newState = state
    switch (action.type){
        case GET_COMMIT_EXECUTING :
            newState = {...state , ...action.payload};
            break
        case GET_COMMIT_SUCCESS :
            newState = {...state , ...action.payload};
            break
        case GET_COMMIT_FAIL :
            newState = {...state , ...action.payload};
            break
        
    }
    return newState;
}