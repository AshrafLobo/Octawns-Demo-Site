import React from 'react';
import { Container } from '../utils/bootstrap_imports_barrel';
import {
  Navigation,
  Footer,
} from './component_barrel';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Navigation />
    <Container className={styles.global_styles} fluid>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;