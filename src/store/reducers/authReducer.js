const initState = {
  authError : null
};

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log("login failed", action.err);
      return {
        ...state,
        authError: "login error"
      }

    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: "login success"
      }

    case 'LOGOUT_SUCCESS':
      console.log('logout successful');
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_SUCCESS':
      console.log("signup successful");
      return {
        ...state,
        authError: null
      }

    case 'SIGNUP_ERROR':
      console.log("error in signup");
      return {
        ...state,
        authError : action.err.message
      };


    default:
      return state;
  }
}

export default authReducer;
