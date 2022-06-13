import { authConstants } from '../constants';
import mutations from '../mutations';
import { LoginState, LoginAction } from '../interfaces/LoginInterface';


const loginReducer = (state: LoginState, action: LoginAction) => {
  const { type } = action
  switch(type) {
    case authConstants.user.LOGIN_USER:
      return mutations.user.mutateUser(state, action)
    case authConstants.user.LOGOUT_USER:
      return mutations.user.mutateUser(state, action)
    default: 
      return state
  }
}

export default loginReducer;