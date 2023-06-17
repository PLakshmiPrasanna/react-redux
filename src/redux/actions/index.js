import {BUY_LAPTOP, BUY_MOBILE, FETCH_USERS_REQUEST, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from "./actionTypes"
export const buyLaptop = () => {
    return {
        type: BUY_LAPTOP
    }
}

export const buyMobile =() => {
    return {
        type: BUY_MOBILE
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST   //post url , return users if success, return error if fail
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS, 
        data: users
    }
}

export const fetchUsersFail = (error) => {
    return{
        type: FETCH_USERS_FAIL,
        data: error
    }
}

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
         fetch('https://jsonplaceholder.typicode.com/users')
        .then ( response => {
             response.json().then(data=> {
                let users = data.map(user=>user.id);
                dispatch(fetchUsersSuccess(users));
            })
        })
        .catch(err=> {
            dispatch(fetchUsersFail(err));
        })
    }
}