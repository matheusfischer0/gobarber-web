import styled from 'styled-components';

import registerBackground from '../../assets/register-background.png';

import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;

  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
    }
  }
  a {
    color: #f4ede8;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${registerBackground}) no-repeat center;
  background-size: cover;
`;
