import React from 'react';
import styles from './client.module.scss';

import {
  background2,
  quotationMarkWhite,
  clientLogos,
} from '../images/image_barrel';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const background_image = { backgroundImage: `url(${background2})` };

const Client = () => (
  <Row className={styles.client_section}>
    <Col className={styles.parallax} style={background_image} xs={12} lg={6}>
      <Row className="h-100 justify-content-center">
        <Col className={`align-self-center ${styles.box}`} xs={8} md={6}>
          <img src={quotationMarkWhite} alt="Quotes" />

          <Row className="h-100">
            <Col as="p" className="align-self-center text-center">
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad inventore iure."
              </Col>
          </Row>
        </Col>
      </Row>
    </Col>

    <Col className={styles.client_images} xs={12} lg={6}>
      <Row xs={1} lg={2}>
        <Col className={`${styles.logo_container} text-center align-middle`} style={{ background: "#333333" }}>
          <img src={clientLogos.oddJobs} alt="Odd Jobs Logo" />
        </Col>
        <Col className={`${styles.logo_container} text-center align-middle`} style={{ background: "#51a351" }}>
          <img src={clientLogos.ddaas} alt="Ddaas logo" />
        </Col>
        <Col className={`${styles.logo_container} text-center align-middle`} style={{ background: "#ffffff" }}>
          <img src={clientLogos.kenia} alt="Kenia Logo" style={{ maxWidth: "300px", width: "100%" }} />
        </Col>
        <Col className={`${styles.logo_container} text-center align-middle`} style={{ background: "#3a87ad" }}>
          <img src={clientLogos.forecast} alt="Forecast Logo" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Client;
