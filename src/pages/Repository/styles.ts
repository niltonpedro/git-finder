import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }


  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;


  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 20px;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
        font-size: 14px;
        color: #a8a8b3;
        margin-top: 4px;
    }
  }
`;
