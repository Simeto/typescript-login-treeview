import { FC } from 'react';
import { CustomButtonInterface } from '../interfaces/ComponentsInterfaces';
import styled from 'styled-components';

const CustomButton: FC<CustomButtonInterface> = ({ name, checked, setClick, required, className }): JSX.Element => {
  return (
    <ButtonGroup>
      <button></button>
    </ButtonGroup>
  )
};

export default CustomButton;

const ButtonGroup = styled.section`

`