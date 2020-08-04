import React from 'react';
import { CustomButton } from './component_barrel';
import styles from './about.module.scss';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const About = () => (
  <Row className={`${styles.about_container} justify-content-center px-4 py-5`}>
    <Col md={10} lg={8} className="align-self-center text-center">
      <h2>ABOUT US</h2>
      <p>OCTAWNS Ltd has fashioned itself as a Special Purpose Vehicle that offers professional digital strategy & marketing, communication consultancy and application design and development services in Nairobi and kenya</p>
      <CustomButton
        text="Read more"
        padding="px-4"
        size="md"
        icon="play"
        color="rgb(40,40,40)" />
    </Col>
  </Row>
);

export default About;