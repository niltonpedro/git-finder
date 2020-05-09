import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo } from './styles'
import logoImage from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi'


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
        <img src="https://avatars0.githubusercontent.com/u/38008073?s=460&u=be068b6a0fc43a8a498dea4f52c4d6df2aad0896&v=4" alt=""/>
        <div>
          <strong>
            Niltonpedr/repo
          </strong>
          <p>
            Sampaio
          </p>
        </div>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
