import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

import { Title, Form, Repositories, Error, Header } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }

}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@gitSearch:Repositories')

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }
    else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@gitSearch:Repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Insira autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)

      const repository = response.data;

      setRepositories([...repositories, repository])
      setNewRepo('')
      setInputError('');
    } catch (error) {
      setInputError('Erro ao buscar o repositório inserido');
    }

  }

  return (
    <>
      <Header>
        <img src={logoImage} alt="logo" />
      </Header>
      <Title> Explore repositórios pelo Github </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Informe o repositório"
        />
        <button type="submit">Procurar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
