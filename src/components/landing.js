import React from 'react';
import styles from './landing.module.scss';
import { CustomButton } from './component_barrel';

import {
  background,
  logos,
} from '../images/image_barrel';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const background_image = { backgroundImage: `url(${background})` };

const Landing = () => (
  <Row className={styles.parallax} style={background_image}>
    <Col className={`mx-4 align-self-center text-center ${styles.call_to_action}`}>
      <h1 className="m-0">
        <img src={logos.octawnsLogo} alt="Octawns" />
      </h1>
      <p className="my-3">Ready to get your ideas <span>online?</span></p>
      <CustomButton
        text="Get started today"
        padding="px-4"
        size="lg"
        icon="play" />
    </Col>
  </Row>
);

export default Landing;