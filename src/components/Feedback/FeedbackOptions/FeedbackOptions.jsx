import React from 'react';
import ButtonWrapper from './FeedbackOptions.styled';

const FeedbackOptions = ({
  totalPlusPercent,
  handleClick,
  neutralHandleClick,
  badHandleClick,
}) => {
  return (
    <ButtonWrapper onClick={totalPlusPercent}>
      <button onClick={handleClick}>good</button>
      <button onClick={neutralHandleClick}>neutral</button>
      <button onClick={badHandleClick}>bad</button>
    </ButtonWrapper>
  );
};

export default FeedbackOptions;
