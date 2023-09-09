import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

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
      <Section>
        <FeedbackOptions
          totalPlusPercent={this.totalPlusPercent}
          handleClick={this.handleClick}
          neutralHandleClick={this.neutralHandleClick}
          badHandleClick={this.badHandleClick}
        />

        <Statistics
          goodValue={this.state.goodValue}
          neutralValue={this.state.neutralValue}
          badValue={this.state.badValue}
          total={this.state.total}
          positive={Math.round(this.state.positive)}
        />
      </Section>
    );
  }
}
