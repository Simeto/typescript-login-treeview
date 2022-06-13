import { FC } from 'react';
import styled from 'styled-components';
import { CustomInputInterface } from '../interfaces/ComponentsInterfaces';

const CustomInput: FC<CustomInputInterface> =  ({type, value, name, required, label, className, onChange}): JSX.Element => {
  return (
    <FormGroup>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} id={name} required={required}/>
    </FormGroup>
  )
};

export default CustomInput;

const FormGroup = styled.section`

`