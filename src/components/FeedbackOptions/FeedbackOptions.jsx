import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  return (
    <div className={css.feedbackButtons}>
      <button className={css['good']} onClick={() => setGood(good + 1)} type="button">
        good
      </button>
      <button className={css['neutral']} onClick={() => setNeutral(neutral + 1)} type="button">
        neutral
      </button>
      <button className={css['bad']} onClick={() => setBad(bad + 1)} type="button">
        bad
      </button>
    </div>
  )
}

FeedbackOptions.propTypes = {
  feedbackBtn: PropTypes.object.isRequired,
  good: PropTypes.object.isRequired,
  neutral: PropTypes.object.isRequired,
  bad: PropTypes.object.isRequired
}
