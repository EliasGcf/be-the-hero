import styled from 'styled-components';

import { Button } from '../../components/Button';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 30px;
    color: ${colors.titulosPrincipais}
  }

  header {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      margin-left: 48px;
      color: ${colors.titulosPrincipais};
    }

    img {
      height: 64px;
    }

    button + button {
      height: 60px;
      width: 60px;
      border-radius: 8px;
      border: 1px solid ${colors.camposLinha};
      background: transparent;
      margin-left: 16px;
      transition: border-color 0.3s;

      :hover {
        border-color: #999;
      }
    }
  }
`;

export const NavigateButton = styled(Button)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
`;

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  list-style: none;

  li {
    background: #fff;
    padding: 32px;
    border-radius: 8px;
    position: relative;

    button {
      position: absolute;
      right: 24px;
      top: 24px;

      border: 0;
      transition: opacity 0.3s;
      :hover {
        opacity: 0.8;
      }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: ${colors.titulos};
    }

    p + strong {
      margin-top: 16px;
    }

    p {
      color: ${colors.textos};
      line-height: 24px;
      font-size: 18px;
    }
  }
`;
