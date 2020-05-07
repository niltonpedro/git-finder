import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="logo" />
      <Title> Explore repositórios pelo Github </Title>

      <Form>
        <input placeholder="Informe o repositório" />
        <button type="submit">Procurar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4"
            alt="Nilton Pedro"
          />
          <div>
            <strong>niltonpedro/devops</strong>
            <p>teste de fazer essa teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4"
            alt="Nilton Pedro"
          />
          <div>
            <strong>niltonpedro/devops</strong>
            <p>teste de fazer essa teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4"
            alt="Nilton Pedro"
          />
          <div>
            <strong>niltonpedro/devops</strong>
            <p>teste de fazer essa teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4"
            alt="Nilton Pedro"
          />
          <div>
            <strong>niltonpedro/devops</strong>
            <p>teste de fazer essa teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
