import React from 'react';
import PropTypes from 'prop-types';
import styles from './testimonial_content.module.scss';

import {
  quotationMarkRed,
  gatsbyIcon,
} from '../../images/image_barrel';

const TestimonialContent = props => (
  <>
    <img className={`${styles.image} my-2`} src={props.image} alt={props.name} />
    <p className={styles.message}>"{props.message}"</p>
    <img className={styles.quotes} src={quotationMarkRed} alt="Red Quotes" />
    <h5 className={styles.name}>{props.name}</h5>
    <p className={styles.occupation}>{props.occupation}</p>
  </>
);

TestimonialContent.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.string,
};

TestimonialContent.defaultProps = {
  name: "Enter Name Here",
  occupation: "Occupation",
  message: "A message is required",
  image: gatsbyIcon,
};

export default TestimonialContent;