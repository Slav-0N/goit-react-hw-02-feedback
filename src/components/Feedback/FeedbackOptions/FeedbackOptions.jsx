import React from 'react';
import ButtonWrapper from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </ButtonWrapper>
  );
};
export default FeedbackOptions;
