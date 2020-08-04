import React from "react";
import { Layout } from "../components/component_barrel";

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const page_styles = {
  background: "red",
  color: "white",
  height: "730px",
  maxHeight: "750px",
};

const font_styles = {
  fontWeight: "bold",
  fontSize: "200px",
};

const NotFoundPage = () => (
  <Layout>
    <Row className="justify-content-center py-5" style={page_styles}>
      <Col md={6} className="align-self-center text-center">
        <p style={font_styles}>404</p>
        <hr style={{ border: "2px solid white" }} />
        <h1>NOT FOUND</h1>
        <p style={{ fontSize: "20px" }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Col>
    </Row>
  </Layout>
)

export default NotFoundPage
