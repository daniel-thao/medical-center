import React from 'react';

export interface ParagraphProps {
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children } = props;

  return <p>{children}</p>;
};
