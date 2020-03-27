import styled from 'styled-components';

import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const CLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-weight: 500;
  color: ${colors.titulos};
  font-size: 18px;
  text-decoration: none;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;
