import { useState, ChangeEvent, FormEvent, useContext, FC } from 'react';
import { useNavigate  } from 'react-router-dom'
import styled from 'styled-components';

import { GlobalContext } from '../context';
import actions from '../actions';
import { UserLogin } from '../interfaces/LoginInterface';

const Login: FC<UserLogin> = ({ dispatchUser, setIsLog }): JSX.Element => {
  const globalContext = useContext(GlobalContext);
  const { userLogin } = globalContext;
  let navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);  
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    userLogin?.(username, password)
      .then((val: { isLogged: boolean }) => {
        dispatchUser(actions.users.userLogin(val))
        setIsLog(val.isLogged)
        if (val.isLogged) {
          navigate('/checkboxes');
        };
      })
      .catch((err: {message: string}) => {
        alert(err.message)
      })
  };

  return (
    <LoginWrapper>
      <h4>Task 1: Login</h4>
      <form onSubmit={(e) => handleLogin(e)}>
        <input type="string" value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => handleUsername(e)}/>
        <input type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => handlePassword(e)}/>
        <button>Login</button>
      </form>
    </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.section`

`