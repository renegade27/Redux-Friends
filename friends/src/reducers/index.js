import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    friends : [],
    isFetching : false,
    errMsg : ''
}

export const friendsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching : true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                friends : action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                errMsg : action.payload
            }
    }
}