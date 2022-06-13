import { FC } from 'react'
import { CustomCheckboxInterface } from '../interfaces/ComponentsInterfaces'
import styled from 'styled-components';

const CustomCheckbox: FC<CustomCheckboxInterface> = ({ name, checked, onCheck, required, label, className }): JSX.Element => {
  return (
    <FormGroup>
      <input type='checkbox' checked={checked} onChange={(e) => onCheck(e)} id={name} required name={name}/>
      <label>
        {label}
      </label>
    </FormGroup>
  )
};

export default CustomCheckbox;

const FormGroup = styled.div`

`