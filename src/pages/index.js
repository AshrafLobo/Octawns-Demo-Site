import React from 'react';
import '../utils/fontawesome';

import {
  Layout,
  Landing,
  About,
  Service,
  Client,
  Testimonials,
  Blog,
  Contact,
} from '../components/component_barrel';

import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => (
  <Layout>
    <Landing />
    <About />
    <Service />
    <Client />
    <Testimonials />
    <Blog />
    <Contact />
  </Layout>
);

export default index;
