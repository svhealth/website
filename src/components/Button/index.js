import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./index.css";

const Button = ({ handleClick, children, type, size }) => {
  const rootStyles = classNames("root", {
    [type]: true,
    [size]: true,
  });

  return (
    <button styleName={rootStyles} onClick={handleClick} type="button">
      <div styleName="content">{children}</div>
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  handleClick: null,
  type: "primary",
  size: "small",
};

export default Button;