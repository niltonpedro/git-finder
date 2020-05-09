import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles'
import logoImage from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


interface RepositoryParams {
  id: string;
}


const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  console.log(params);
  return (
    <>
      <Header>
        <Link to="/">
        <FiChevronLeft size={16}/>
          Voltar
        </Link>
        <img src={logoImage} alt="Logo"/>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4" alt=""/>
          <div>
            <strong> Niltonpedr/repo </strong>
            <p> Sampaio </p>
          </div>
        </header>
        <ul>
          <li>
            <strong> 1080 </strong>
            <span>Stars</span>
          </li>
          <li>
            <strong> 48 </strong>
            <span>Forks</span>
          </li>
          <li>
            <strong> 67 </strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a href="/testes">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Nilton Pedro</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/testes">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Nilton Pedro</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/testes">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Nilton Pedro</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/testes">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>Nilton Pedro</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Issues>
    </>
  );
};

export default Repository;
