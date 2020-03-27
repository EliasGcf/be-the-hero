import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import colors from '../../styles/colors';

import { Button } from '../../components/Button';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${colors.background};
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 36px;
      font-weight: 500;
      color: ${colors.titulosPrincipais};
    }

    p {
      font-size: 18px;
      color: ${colors.textos};
      line-height: 32px;
    }
  }
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 400px;

  > input + textarea {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  div {
    display: flex;
  }

  /* div {
    display: flex;

    > input + input {
      margin-left: 8px;
    }
  } */
`;

export const CancelButton = styled(Button)`
  background: transparent;
  max-width: 170px;
  border: 2.5px solid ${colors.camposLinha};
  color: ${colors.titulos};
  margin-right: 18px;
`;
