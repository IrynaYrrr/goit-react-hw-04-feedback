import React from 'react';
import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ title }) => {
  return (
    <div className={css.notificationTitle}>{title}</div>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired
}
