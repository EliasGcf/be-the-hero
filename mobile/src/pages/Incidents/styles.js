import styled from 'styled-components/native';
import { TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: ${colors.textos};
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 48px;
  margin-bottom: 16px;
  color: ${colors.titulosPrincipais};
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textos};
`;

export const IncidentList = styled(FlatList)`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-top: 16px;
`;

export const GroupRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: ${colors.titulos};
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin-top: 10px;
  font-size: 15px;
  margin-bottom: 24px;
  color: ${colors.textos};
`;

export const DetailsButton = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: ${colors.redHero};
  font-size: 15px;
  font-weight: bold;
`;

