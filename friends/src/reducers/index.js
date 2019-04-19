import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    friends : [],
    isFetching : false,
    isLoggingIn : false,
    token : localStorage.getItem('token'),
    errMsg : ''
}

export const friendsReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn : true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn : false,
                token : action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn : false,
                errMsg : action.payload
            }
        case FETCH_START:
            return {
                ...state,
                isFetching : true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching : false,
                friends : action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching : false,
                errMsg : action.payload
            }
        default:
            return state
    }
}

export default friendsReducer;