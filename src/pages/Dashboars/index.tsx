import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`)

    console.log(response.data)
  }

  return (
    <>
      <img src={logoImage} alt="logo" />
      <Title> Explore repositórios pelo Github </Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Informe o repositório"
        />
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
      </Repositories>
    </>
  );
};

export default Dashboard;
