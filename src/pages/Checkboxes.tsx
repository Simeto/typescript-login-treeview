import { FC, ChangeEvent, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import actions from '../actions';
import { UserLogout } from '../interfaces/LoginInterface';
import { GlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';
const checkBoxData = [
  {name: '1', isChecked: false}, 
  {name: '2', isChecked: false}, 
  {name: '3', isChecked: false}, 
  {name: '4', isChecked: false},
  {name: '5', isChecked: false}
]

const Checkboxes: FC<UserLogout> = ({dispatchUser, setIsLog}): JSX.Element => {
  const globalContext = useContext(GlobalContext);
  const { userLogout } = globalContext;
  const [cb, setCB] = useState<any[]>([])
  let navigate = useNavigate();

  useEffect(() => {
    setCB(checkBoxData)
  }, [])

  const handleLogout = () => {
    userLogout?.()
      .then((val: { isLogged: boolean }) => {
        dispatchUser(actions.users.userLogout(val));
        setIsLog(val.isLogged)
        if (!val.isLogged) {
          navigate('/login');
        };
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target ;
    if (name === 'All') {
      let tempCB = cb.map((item) => {
        return {...item, isChecked: checked}
      })
      setCB(tempCB)
    } else {
      let tempCB = cb.map((item) => 
        item.name === name ? {...item, isChecked: checked} : item
      )
      setCB(tempCB)
    }
  }

  return (
    <CheckboxesWrapper>
      <h4>Task 2: Checkboxes</h4>
      <button onClick={handleLogout}></button>
      <div>
          <input type="checkbox" name="All" onChange={handleChange} checked={cb.filter((item) => item?.isChecked !== true).length < 1}></input>
          <label>All</label>
        </div>
      {cb.map((item) => (
        <div>
          <input name={item.name} checked={item?.isChecked || false} onChange={handleChange} type="checkbox"></input>
          <label>xvxcxcv</label>
        </div>
      ))}
    </CheckboxesWrapper>
  );
};

export default Checkboxes

const CheckboxesWrapper = styled.div``
