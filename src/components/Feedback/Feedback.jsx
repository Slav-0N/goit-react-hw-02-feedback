import { Component } from 'react';
import { FeedbackSection } from './Feedback.styled';

export class FeedbackCounter extends Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    total: 0,
    positive: 0,
  };

  handleClick = event => {
    this.setState(prevState => {
      return { goodValue: prevState.goodValue + 1 };
    });
  };

  neutralHandleClick = event => {
    this.setState(prevState => {
      return { neutralValue: prevState.neutralValue + 1 };
    });
  };

  badHandleClick = event => {
    this.setState(prevState => {
      return { badValue: prevState.badValue + 1 };
    });
  };

  countTotalFeedback = e => {
    this.setState(state => {
      return { total: state.goodValue + state.neutralValue + state.badValue };
    });
  };

  countPositiveFeedbackPercentage = e => {
    this.setState(state => {
      return {
        positive:
          (state.goodValue * 100) /
          (state.goodValue + state.neutralValue + state.badValue),
      };
    });
  };

  totalPlusPercent = e => {
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <FeedbackSection>
        <h1>Please leave feedback</h1>
        <div onClick={this.totalPlusPercent}>
          <button onClick={this.handleClick}>good</button>
          <button onClick={this.neutralHandleClick}>neutral</button>
          <button onClick={this.badHandleClick}>bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good:</p>
          <span>{this.state.goodValue}</span>
        </div>
        <div>
          <p>Neutral:</p>
          <span>{this.state.neutralValue}</span>
        </div>
        <div>
          <p>Bad:</p>
          <span>{this.state.badValue}</span>
        </div>

        <div>
          <p>Total:</p>
          <span>{this.state.total}</span>
        </div>
        <div>
          <p>Positive feedback:</p>
          <span>{Math.round(this.state.positive)} %</span>
        </div>
      </FeedbackSection>
    );
  }
}
