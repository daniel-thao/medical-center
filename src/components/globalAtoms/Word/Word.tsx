import React from 'react';

export interface WordProps {
  children?: React.ReactNode;
}

export const Word: React.FC<WordProps> = (props) => {
  const { children } = props;

  return <span>{children}</span>;
};
