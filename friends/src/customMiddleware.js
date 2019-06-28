
export const customMiddleware = store => next => action => {
    if(action.type === "LOGIN_SUCCESS") {
      localStorage.setItem('userToken', action.payload.token);
    }
    next(action);
};
