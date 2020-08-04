import React from 'react';

import { TestimonialContent } from './component_barrel';
import styles from './testimonials.module.scss';

import useData from '../utils/useData';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const testimonial_data = useData.testimonial_data;

const Testimonials = () => (
  <Row className={`${styles.testimonials} p-5`}>
    <Col className="align-self-center text-center">
      <h2>WHAT PEOPLE SAY</h2>
      <p className={styles.text}>See what people say about our work</p>

      <Row className="justify-content-center">
        {
          testimonial_data.map(({ name, occupation, message, image }, index) => {
            return (
              <Col key={`testimonial ${index}`} xs={12} lg={4} xl={3}>
                <TestimonialContent
                  name={name}
                  occupation={occupation}
                  message={message}
                  image={image}
                />
              </Col>
            )
          })
        }
      </Row>
    </Col>
  </Row>
);

export default Testimonials;