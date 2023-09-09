import React from 'react';
import StatisticWrapper from './Statistics.styled';

const Statistics = ({ goodValue, neutralValue, badValue, total, positive }) => {
  return (
    <StatisticWrapper>
      <h2>Statistics</h2>
      <div>
        <p>Good:</p>
        <span>{goodValue}</span>
      </div>
      <div>
        <p>Neutral:</p>
        <span>{neutralValue}</span>
      </div>
      <div>
        <p>Bad:</p>
        <span>{badValue}</span>
      </div>

      <div>
        <p>Total:</p>
        <span>{total}</span>
      </div>
      <div>
        <p>Positive feedback:</p>
        <span>{positive} %</span>
      </div>
    </StatisticWrapper>
  );
};

export default Statistics;
