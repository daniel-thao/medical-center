import React from 'react';

import { Typography } from '@mui/material';

export interface QuoteProps {
  children?: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = (props) => {
  const { children } = props;

  return <h3>{children}</h3>;
};
