import styled from 'styled-components';

import colors from '../../styles/colors';

export default styled.textarea`
  width: 100%;
  resize: vertical;
  min-height: 175px;
  height: 60px;
  color: ${colors.titulos};
  border: 1.5px solid ${colors.camposLinha};
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;

  ::placeholder {
    color: ${colors.textosSecundarios};
  }
`;