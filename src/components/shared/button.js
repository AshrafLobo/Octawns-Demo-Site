import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';
import { Button } from '../../utils/bootstrap_imports_barrel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomButton = props => {
  const style = {
    background: props.color,
    width: props.width,
  };

  const padding = props.padding;
  const margin = props.margin;
  const icon = props.icon ? <FontAwesomeIcon className="ml-1" icon={props.icon} size="xs" /> : "";

  return (
    <Button
      className={`${styles.custom_button} ${padding} ${margin}`}
      style={style}
      size={props.size}
      type={props.type}
      disabled={props.disabled}>
      {props.text} {icon}
    </Button>
  )
};

CustomButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  size: "lg",
  text: "Text needed here",
  padding: "p-0",
  margin: "m-0",
  icon: "",
  color: "red",
  type: "button",
  width: "auto",
  disabled: false,
};

export default CustomButton;