import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer =  (state = { authData:null }, action) => {
  console.log(action)
  switch(action.type){
    case AUTH:
      console.log(action?.data);
      return state;

    default:
      return state;
  }
};

export default authReducer;