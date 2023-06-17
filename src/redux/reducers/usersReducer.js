import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../actions/actionTypes"

const initialState = {
    users: [],
    error: '',
    isLoading: false
}

const usersReducer = (state=initialState, action)=> {
    console.log(state, action)
    switch(action.type){
        case FETCH_USERS_REQUEST : 
            return { ...state, isLoading: true}
        case FETCH_USERS_SUCCESS:
            return {users: action.data, error: '' , isLoading:false}
        case FETCH_USERS_FAIL:
            return { users: [] , error: action.data, isLoading : false }
        default:
            return state
        }
}

export default usersReducer