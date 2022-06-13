import { authConstants } from '../constants';

export const userLogin = (payload: {}) => (
  {
    type: authConstants.user.LOGIN_USER,
    payload
  }
)

export const userLogout = (payload: {}) => (
  {
    type: authConstants.user.LOGOUT_USER,
    payload
  }
)