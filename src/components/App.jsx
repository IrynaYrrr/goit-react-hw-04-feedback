import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const persentage = Math.round(this.state.good / this.countTotalFeedback() * 100)
    return isNaN(persentage) ? 0 : persentage
  }

  render() {

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>

        <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {this.countTotalFeedback() !== 0
          ?
          <Section title='Statistics'>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
          :
          <Notification title='There is no feedback' />
        }

      </div>
    );
  }
}
