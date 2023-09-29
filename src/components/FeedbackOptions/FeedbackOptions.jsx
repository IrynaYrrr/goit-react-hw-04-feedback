import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={css.feedbackButtons}>
      {options.map((button) => (
          <button className={css[button]} onClick={() => onLeaveFeedback(button)} type="button">
            {button}
          </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  feedbackBtn: PropTypes.object.isRequired,
  good: PropTypes.object.isRequired,
  neutral: PropTypes.object.isRequired,
  bad: PropTypes.object.isRequired
}
