import React from 'react';
import styles from './error_text.module.scss';

const ErrorText = props => (
  <div className={`w-100 mt-1 ${styles.error}`}>
    {props.children}
  </div>
);

export default ErrorText;