import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <div className={css.titleSection}>
        {title}
      </div>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}
