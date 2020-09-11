import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { Container, Listagem, NavigateButton } from './styles';

import logoImg from '../../assets/logo.svg';
import colors from '../../styles/colors';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  function handleNavigateNewIncident() {
    history.push('/incidents/new');
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamete.');
    }
  }

  async function handleLogout() {
    localStorage.clear();
    history.push('/')
  }

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        }
      });
  
      const data = response.data.map(incident => ({
        ...incident,
          valueFormated: formatPrice(incident.value),
      }));      
      
      setIncidents(data);
    }
    loadIncidents();
  }, [ongId]);

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem Vinda, {ongName}</span>

        <NavigateButton onClick={handleNavigateNewIncident}>
          Cadastrar novo caso
        </NavigateButton>
        <button onClick={handleLogout} type="button">
          <FiPower size={24} color={colors.redHero} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <Listagem>
        {incidents.map(incident => (  
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{incident.valueFormated}</p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={24} color={colors.textosSecundarios} />
            </button>
          </li>
        ))}
      </Listagem>
    </Container>
  );
}
