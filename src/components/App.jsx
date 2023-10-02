import React, { useState } from "react";
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const persentage = Math.round(good / countTotalFeedback() * 100)
    return isNaN(persentage) ? 0 : persentage
  }

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
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          setGood={setGood}
          setNeutral={setNeutral}
          setBad={setBad}
        />
      </Section>
      {countTotalFeedback() !== 0
        ?
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
        :
        <Notification title='There is no feedback' />
      }
    </div>
  )
}
