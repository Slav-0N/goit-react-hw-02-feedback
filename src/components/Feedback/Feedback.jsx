import { Component } from 'react';
import { FeedbackSection } from './Feedback.styled';

export class FeedbackCounter extends Component {
  state = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
  };

  handleClick = event => {
    // this.setState({ value: 7 });
    this.setState(prevState => {
      console.log(prevState);
      return { goodValue: prevState.goodValue + 1 };
    });
  };

  neutralHandleClick = event => {
    this.setState(prevState => {
      console.log(prevState);
      return { neutralValue: prevState.neutralValue + 1 };
    });
  };

  badHandleClick = event => {
    this.setState(prevState => {
      console.log(prevState);
      return { badValue: prevState.badValue + 1 };
    });
  };

  render() {
    return (
      <FeedbackSection>
        <h1>Please leave feedback</h1>
        <div>
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
      </FeedbackSection>
    );
  }
}
