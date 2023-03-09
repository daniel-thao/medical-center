import React from "react";

export interface TitleProps {
    children?: React.ReactNode
}

export const Title: React.FC<TitleProps> = (props) => {
    const {children} = props

  return <h2>{children}</h2>;
};
