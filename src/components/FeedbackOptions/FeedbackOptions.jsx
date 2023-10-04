import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons }) => {

  return (
    <div className={css.feedbackButtons}>

      {buttons.map((button) => (
        <button className={css[button.name]} onClick={() => button.setValue(button.value + 1)} type="button">
          {button.name}
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
