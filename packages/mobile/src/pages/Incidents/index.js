import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, View } from 'react-native';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import colors from '../../styles/colors';

import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentList,
  Incident,
  GroupRow,
  IncidentProperty,
  IncidentValue,
  DetailsButton,
  DetailsButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  function handleNavigateToDetails(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page },
    });

    const data = response.data.map(incident => ({
      ...incident,
      valueFormated: formatPrice(incident.value),
    }))

    setIncidents([...incidents, ...data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>Bem-Vindo!</Title>
      <Description>
        Escolha um dos casos abaixo e salve o dia.
      </Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <Incident>
            <GroupRow>
              <View style={{ width: '50%', marginRight: 16}} >
                <IncidentProperty>CASO:</IncidentProperty>
                <IncidentValue>{incident.title}</IncidentValue>
              </View>

              <View style={{  flex: 1 }} >
                <IncidentProperty>ONG:</IncidentProperty>
                <IncidentValue ellipsizeMode="tail" >{incident.ong.name}</IncidentValue>
              </View>
            </GroupRow>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>{incident.valueFormated}</IncidentValue>

            <DetailsButton onPress={() => handleNavigateToDetails(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color={colors.redHero} />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
