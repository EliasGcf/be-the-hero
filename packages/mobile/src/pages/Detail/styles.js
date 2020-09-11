import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-top: 48px;
`;

export const GroupRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${colors.titulos};
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  color: ${colors.textos};
`;

export const ContactBox = styled(Incident)`
  margin-top: 16px;
`;

export const HeroTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.titulosPrincipais};
  line-height: 30px;
`;

export const HeroDescription = styled(IncidentValue)`
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(TouchableOpacity)`
  background: ${colors.redHero};
  border-radius: 8px;
  height: 50px;
  width: 48%;

  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  font-size: 15px;
  color: #fff;
`;