import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  id: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <h2> Repo: {params.id} </h2>;
};

export default Repository;
