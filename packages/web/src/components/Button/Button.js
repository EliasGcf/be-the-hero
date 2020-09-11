import styled from 'styled-components';

import colors from '../../styles/colors';

export default styled.button`
  width: 100%;
  height: 60px;
  background: ${colors.redHero};
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.3s;

  :hover {
    filter: brightness(90%);
  }
`;