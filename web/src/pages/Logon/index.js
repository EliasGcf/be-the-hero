import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form } from './styles';

import api from '../../services/api';

import { Button } from '../../components/Button';
import { Input } from '../../components/UnForm';
import BackLink from '../../components/BackLink';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg'

export default function Logon() {
  const history = useHistory();

  async function handleSubmit({ id }, { reset }) {
    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no Login, tente novamente.');
    }
  }

  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be The Hero"/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="id" placeholder="Sua ID" />
          <Button type="submit">Enviar</Button>

          <BackLink
            to="/register"
            Icon={FiLogIn}
            title="Não tenho cadastro"
          />
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}
