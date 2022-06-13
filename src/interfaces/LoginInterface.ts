export interface LoginState {
  username: string,
  isLoading: boolean,
  isLogged: boolean,
  error: string
}

export interface LoginAction {
  type: string,
  payload: Object
}

export interface UserLogin {
  dispatchUser: Function,
  setIsLog: Function,
}

export interface UserLogout {
  dispatchUser: Function,
  setIsLog: Function,
}