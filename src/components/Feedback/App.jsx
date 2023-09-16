import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.ceil((good * 100) / this.countTotalFeedback()) || 0;
  };

  // totalPlusPercent = e => {
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const totalVouts = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <Section>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {totalVouts > 0 ? (
          <Statistics
            goodValue={good}
            neutralValue={neutral}
            badValue={bad}
            total={totalVouts}
            positive={Math.round(positive)}
          />
        ) : (
          <Notification message="Тут немає відгуків." />
        )}
      </Section>
    );
  }
}
