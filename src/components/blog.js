import React from 'react';
import styles from './blog.module.scss';
import { blogs } from '../images/image_barrel';

import { BlogContent } from './component_barrel';
import {
  Row,
  Col,
  CardDeck,
} from '../utils/bootstrap_imports_barrel';

const Blog = () => (
  <Row className={`${styles.blog} p-5 justify-content-center`}>
    <Col className="align-self-center text-center" lg={10} xl={9}>
      <h2>RECENT BLOG POSTS</h2>
      <p className={`${styles.text} mx-auto mb-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet risus sit amet purus auctor volutpat fusce iaculis lobortis velit quis mattis. Vestibulum ante ipsum primis in faucibus</p>

      <CardDeck>
        <BlogContent
          image={blogs.blog1}
          title="Blog Post 1"
        />

        <BlogContent
          image={blogs.blog2}
          title="Blog Post 2"
        />

        <BlogContent
          image={blogs.blog3}
          title="Blog Post 3"
        />
      </CardDeck>
    </Col>
  </Row>
);

export default Blog;