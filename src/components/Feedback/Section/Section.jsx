import React from 'react';
import { StyledSection } from './Section.styled';

const Section = ({ children }) => {
  return (
    <StyledSection>
      <h1>Please leave feedback</h1>
      {children}
    </StyledSection>
  );
};

export default Section;
