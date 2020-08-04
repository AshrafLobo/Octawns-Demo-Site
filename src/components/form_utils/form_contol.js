import React from 'react';
import PropTypes from 'prop-types';

import styles from './form_control.module.scss';

import {
  Field,
  ErrorMessage,
} from 'formik';

import {
  Row,
  Col,
} from '../../utils/bootstrap_imports_barrel';

import ErrorText from './error_text';

const FormControl = ({ name, as }) => (
  <Row className={`justify-content-center text-left mb-4 ${styles.form_control}`}>
    <Col md={8} lg={6}>
      <Field as={as} className="w-100 d-block" name={name} type="text" placeholder={name} autoComplete="off" />
      <ErrorMessage component={ErrorText} name={name} />
    </Col>
  </Row>
);

FormControl.propTypes = {
  name: PropTypes.string,
  as: PropTypes.string,
};

FormControl.defaultProps = {
  as: "input",
}

export default FormControl;