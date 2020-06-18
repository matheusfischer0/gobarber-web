import Tooltip from '../Tooltip';
import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 10px 11px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;


  display: flex;
  align-items: center;
  & + div {
    margin-top: 18px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}


  input {
     flex: 1;
     background: transparent;
     border: 0;
     padding:10px;
     color: #f4ede8;
   }
   svg {
     margin-right: 16px;
   }
 `;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
