import { LoginState, LoginAction } from '../interfaces/LoginInterface';

export const mutateUser = (state: LoginState, action: LoginAction) => {
  const { payload } = action;
  return { ...state, user: payload }
}