import React from 'react';
import styles from './contact.module.scss';

import {
  FormControl,
  CustomButton,
} from './component_barrel';

import {
  Formik,
  Form,
} from 'formik';

import * as yup from 'yup';

import {
  Row,
  Col,
} from '../utils/bootstrap_imports_barrel';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = yup.object().shape({
  name: yup.string()
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  email: yup.string()
    .email('Invalid email address')
    .required('Required'),
  subject: yup.string()
    .required('Required'),
  message: yup.string()
    .required('Required'),
});

const Contact = () => {
  return (
    <Row className={`justify-content-center py-4 ${styles.contact_container}`}>
      <Col className="align-self-center text-center" lg={10} xl={9}>
        <h2>LET'S GET YOU STARTED</h2>
        <p>Fill out the form and we'll be in touch soon</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={
            (values, { setSubmitting, resetForm }) => {
              console.log("Form data", values)
              setSubmitting(false)
              resetForm()
            }
          }
        >
          {
            formik => (
              <Form>
                <FormControl name="name" />
                <FormControl name="email" />
                <FormControl name="subject" />
                <FormControl as="textarea" name="message" />
                <CustomButton
                  text="Submit"
                  padding="px-4"
                  size="md"
                  color="rgb(40,40,40)"
                  type="submit"
                  width="200px"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </Form>
            )
          }
        </Formik>
      </Col>
    </Row>
  );
};

export default Contact;