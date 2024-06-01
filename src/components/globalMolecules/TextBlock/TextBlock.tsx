import React from 'react';

import { Quote } from '../../globalAtoms/Quote/Quote';
import { Paragraph } from '../../globalAtoms/Paragraph/Paragraph';
import { Box } from '@mui/material';
import { Word } from '../../globalAtoms/Word/Word';
import { Title } from '../../globalAtoms/Title/Title';

export enum TextBlockClassification {
  paragraph = 'paragraph',
  quote = 'quote',
  title = 'title'
}

export interface TextBlockProps {
  body: React.ReactNode;
  classification: TextBlockClassification;
  className?: string;
  sx?: any;
}

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  const { classification, className, body, sx } = props;

  const test: { [key: string]: React.ReactElement } = {
    paragraph: <Paragraph>{body}</Paragraph>,
    quote: <Quote>{body}</Quote>,
    title: <Title>{body}</Title>
  };

  return (
    <Box className={className} sx={sx}>
      {test[classification]}
    </Box>
  );
};
