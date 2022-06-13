import { createContext } from 'react'

interface User {
  userLogin?: Function,
  userLogout?: Function,
};

const obj: User = {};

export const Context = createContext(obj)

export const Provider = ( { context, children }: { context: {}; children: JSX.Element }) => {
  const globalContext = {
    ...context
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>
}

export const { Consumer } = Context
