import React from 'react';

import { CLink } from './styles';

import colors from '../../styles/colors';

export default function BackLink({ Icon, title, to }) {
  return (
    <CLink to={to}>
      <Icon size={16} color={colors.redHero} />
      {title}
    </CLink>
  );
}
