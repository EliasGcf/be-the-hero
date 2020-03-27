import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Content, Form } from './styles';

import logoImg from '../../assets/logo.svg'

import BackLink from '../../components/BackLink';
import { Input } from '../../components/UnForm';
import { Button } from '../../components/Button';

export default function Register() {
  const history = useHistory();

  async function handleSubmit({ name, email, whatsapp, city, uf }, { reset }) {
    try {
      const response = await api.post('ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Error no cadastro, tente novamente.');
    }
    
    reset();
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <BackLink
            to="/"
            Icon={FiArrowLeft}
            title="Voltar para o logon"
          />
        </section>

        <Form onSubmit={handleSubmit} >
          <Input name="name" placeholder="Nome da ONG" />
          <Input type="email" name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Whatsapp" />
          
          <div>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" style={{ width: 80 }} />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
