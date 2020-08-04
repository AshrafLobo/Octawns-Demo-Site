import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  Col,
  Card,
} from '../../utils/bootstrap_imports_barrel';

import styles from './blog_content.module.scss';
import { gatsbyIcon } from '../../images/image_barrel';

const today = new Date().toDateString();

const BlogContent = props => (
  <Card className={styles.blog_card}>
    <Row>
      <Col className={styles.image_container}>
        <Card.Img variant="top" src={props.image} />
        <p className={`${styles.blog_icon} p-3 m-0`}>
          OCTAWNS
        </p>
      </Col>
    </Row>

    <Card.Body className="text-left">
      <Card.Title>{props.title}</Card.Title>
      <small>BY {props.username} | {props.date_posted}</small>
      <Card.Text className={`${styles.text} m-0`}>
        {props.text}
      </Card.Text>
      <Card.Link className={styles.link} href="#">READ MORE</Card.Link>
    </Card.Body>
  </Card>
);

BlogContent.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  date_posted: PropTypes.string,
  text: PropTypes.string,
};

BlogContent.defaultProps = {
  image: gatsbyIcon,
  username: "ANON ANONYMOUS",
  date_posted: today,
  text: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
};

export default BlogContent;