import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <h1>Faça seu Logon</h1>
        <Input name="email" type="text" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="#forgot">Esqueci minha senha</a>
      </form>
      <a href="#criar">
        <FiLogIn></FiLogIn>
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
