import React from 'react';
import styles from './footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  chat,
  envelope,
} from '../images/image_barrel';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const Footer = () => (
  <Row className={`justify-content-center text-center py-4 m-0 ${styles.footer_container}`}>
    <Col className="align-self-center" lg={10} xl={9}>
      <Row className="justify-content-center">
        <Col xs={5} md={3} lg={2}>
          <img src={chat} alt="Chat" />
          <h5 className="m-0">LET'S TALK</h5>
          <p className="m-0">Tel: +254 722 111 222</p>
          <a className="m-0" href="/">CHAT</a>
        </Col>

        <Col xs={5} md={3} lg={2}>
          <img src={envelope} alt="Email" />
          <h5 className="m-0">EMAIL US</h5>
          <p className="m-0">Email: info@example.com</p>
          <a className="m-0" href="/">EMAIL</a>
        </Col>
      </Row>

      <hr />
      <div className={styles.bottom_container}>
        <p>&copy; 2020 OCTAWNS is proudly powered by Gatsby Js</p>
        <a className="m-1" href="/"><FontAwesomeIcon size="lg" icon={['fab', 'facebook-f']} /></a>
        <a className="m-1" href="/"><FontAwesomeIcon size="lg" icon={['fab', 'twitter']} /></a>
        <a className="m-1" href="/"><FontAwesomeIcon size="lg" icon={['fab', 'linkedin-in']} /></a>
      </div>
    </Col>
  </Row>
);

export default Footer;