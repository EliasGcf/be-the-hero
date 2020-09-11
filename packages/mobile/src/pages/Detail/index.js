import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, Linking, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import colors from '../../styles/colors';

import {
  Container,
  Header,
  Incident,
  GroupRow,
  IncidentProperty,
  IncidentValue,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { incident } = route.params;
  const message = `Olá ${incident.ong.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${incident.valueFormated}.`;

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.ong.email}`],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+55${incident.ong.whatsapp}&text=${message}`);
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color={colors.redHero} />
        </TouchableOpacity>
      </Header>

      <Incident>
        <GroupRow>
          <View style={{ marginRight: 16, width: '50%' }}>
            <IncidentProperty style={{ marginTop: 0 }}>
              CASO:
            </IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>
          </View>

          <View style={{ flex: 1 }} >
            <IncidentProperty style={{ marginTop: 0 }}>
              ONG:
            </IncidentProperty>
            <IncidentValue ellipsizeMode="tail" >
              {incident.ong.name} de {incident.ong.city}/{incident.ong.uf}
            </IncidentValue>
          </View>
        </GroupRow>

        <IncidentProperty>DESCRIÇÃO:</IncidentProperty>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>{incident.valueFormated}</IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
