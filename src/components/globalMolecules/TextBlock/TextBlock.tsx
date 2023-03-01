import React from "react";

import { Quote } from "../../globalAtoms/Quote/Quote";
import { Paragraph } from "../../globalAtoms/Paragraph/Paragraph";
import { Box } from "@mui/material";
import { Word } from "../../globalAtoms/Word/Word";

export interface TextBlockProps {
  classification: string;
  className?: string;
  body: React.ReactNode;
}

export const TextBlock: React.FC<TextBlockProps> = (props) => {
  const { classification, className, body } = props;

  const test: { [key: string]: React.ReactElement } = {
    paragraph: <Paragraph>{body}</Paragraph>,
    quote: <Quote>{body}</Quote>,
  };
  
  return <Box className={className}>{test[classification]}</Box>;
};
