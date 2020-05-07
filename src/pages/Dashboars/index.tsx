import React from 'react';
import logoImage from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="logo" />
      <Title> Explore repositórios pelo Github </Title>

      <Form>
        <input placeholder="informe o repositório" />
        <button type="submit">Procurar</button>
      </Form>
    </>
  );
};

export default Dashboard;
