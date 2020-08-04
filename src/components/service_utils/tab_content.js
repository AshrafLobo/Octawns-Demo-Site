import React from 'react';
import PropTypes from 'prop-types';

import styles from './tab_content.module.scss';

import {
  Row,
  Col,
} from '../../utils/bootstrap_imports_barrel';

import { gatsbyIcon } from '../../images/image_barrel';

import { CustomButton } from '../component_barrel';

const xs_image_attr = {
  order: 'first',
  span: 12,
};

const lg_image_attr = {
  order: 'last',
  span: 4,
};

const TabContent = props => (
  <Row className={`${styles.tab_content} p-0 p-md-5`}>
    <Col className={`${styles.text_col} align-self-top mt-4 mt-lg-0`} xs={12} lg={8}>
      <Row>
        <Col className={`${styles.icon} text-right p-0 pr-2 pr-md-3`} xs={2}>
          <img src={props.icon} alt={`${props.title} Icon`} />
        </Col>
        <Col className='text-left' xs={10}>
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <CustomButton
            text="Read more"
            padding="px-4"
            size="md"
            icon="play"
            color="rgb(40,40,40)" />
        </Col>
      </Row>
    </Col>
    <Col className={`${styles.image_col} align-self-top text-center`} xs={xs_image_attr} lg={lg_image_attr}>
      <img src={props.image} alt={props.title} />
    </Col>
  </Row>
);

TabContent.propTypes = {
  icon: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

TabContent.defaultProps = {
  icon: gatsbyIcon,
  image: gatsbyIcon,
  title: "Service Title",
  content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, quas distinctio. Aliquam nobis tenetur veniam error reiciendis sapiente perferendis rerum ducimus labore accusantium, autem, dolores maxime voluptatibus, exercitationem rem vel!",
};

export default TabContent;