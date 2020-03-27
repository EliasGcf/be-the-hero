import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, Form, CancelButton } from './styles';

import logoImg from '../../assets/logo.svg'

import BackLink from '../../components/BackLink';
import { Input, TextArea } from '../../components/UnForm';
import { Button } from '../../components/Button';

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleSubmit({ title, description, value }, { reset }) {
    try {
      await api.post('incidents', {
        title,
        description,
        value,
      },{
        headers: {
          Authorization: ongId,
        }
      });
      
      history.push('/profile');
      alert('Caso cadastrado com sucesso.');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
    reset();
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <BackLink 
            to="/profile"
            Icon={FiArrowLeft}
            title="Voltar para home"
          />
        </section>

        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do caso" />
          <TextArea name="description" placeholder="Descrição" />
          <Input name="value" placeholder="Valor em reais" />

          <div>
            <CancelButton onClick={() => history.push('/profile')} type="button">Cancelar</CancelButton>
            <Button type="submit">Cadastrar</Button>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
