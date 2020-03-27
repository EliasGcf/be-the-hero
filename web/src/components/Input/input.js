import styled from 'styled-components';

import colors from '../../styles/colors';

export default styled.input`
  width: 100%;
  height: 60px;
  color: ${colors.titulos};
  border: 1.5px solid ${colors.camposLinha};
  border-radius: 8px;
  padding: 0 24px;

  ::placeholder {
    color: ${colors.textosSecundarios};
  }
`;