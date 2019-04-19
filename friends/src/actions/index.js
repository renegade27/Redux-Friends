import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login/', creds).then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
        console.log("Login Error" + err);
        if (err.response.status === 403) {
            localStorage.removeItem('token');
        }
        dispatch({
            type : LOGIN_FAILURE,
            payload : err.response.status
        })
    })
};

export const fetch = () => dispatch => {
    dispatch({
        type : FETCH_START,
        payload : true
    })
    const request = axios.get('https://swapi.co/api/people/');
    request.then(({data}) => {
        dispatch({
            type : FETCH_SUCCESS,
            payload : data.results
        });
    })
    .catch(err => {
        dispatch({
            type : FETCH_FAILURE,
            error : err
        })
    })
}