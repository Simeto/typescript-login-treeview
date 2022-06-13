import { useEffect , useState, useReducer, FC } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { loginReducer } from './reducers';
import { ErrorPage } from './pages';

import "./App.css";
import { GlobalContextProvider } from './context';
import { Login, Checkboxes } from './pages';
import { userLogin, userLogout } from './services/auth';
import { initialState } from './store';

const App:FC = () => {
  const [user, dispatchUser] = useReducer(loginReducer, initialState.login);
  const [isLog, setIsLog] = useState<boolean>(user.isLogged)
  
  const sharedContext = {
    userLogin,
    userLogout,
    user
  }

  useEffect(() => {
    setIsLog(!user.isLogged)
  }, [user.isLogged])

  return <AppWrapper className='App'>
    <Router>
      <GlobalContextProvider context={sharedContext}>
        <Routes>
          {isLog === false 
            ? <Route path="/login" element={<Login dispatchUser={dispatchUser} setIsLog={setIsLog}/>} /> 
            : <Route path="/checkboxes" element={<Checkboxes dispatchUser={dispatchUser} setIsLog={setIsLog}/>} />
          }
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login" element={isLog === true ? <Login dispatchUser={dispatchUser} setIsLog={setIsLog}/> : <Checkboxes dispatchUser={dispatchUser} setIsLog={setIsLog}/>} />
        </Routes>
      </GlobalContextProvider>
    </Router>
    </AppWrapper>;
};

export default App;

const AppWrapper = styled.main`
`
