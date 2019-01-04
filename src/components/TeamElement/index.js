import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Img from "gatsby-image";

import "./index.css";

const TeamElement = ({ name, position, image }) => (
  <button styleName="root" type="button">
    <div styleName="image-wrapper">
      <div styleName="rect" />
      <Img
        styleName="image"
        alt={`${name.toLowerCase()} photo`}
        fluid={image}
        critical
      />
    </div>
    <div styleName="name">
      <Typography variant="h3" color="dark-blue">
        {name}
      </Typography>
    </div>
    {position && (
      <div styleName="position">
        <Typography color="dark-blue">{position}</Typography>
      </div>
    )}
  </button>
);

TeamElement.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  image: PropTypes.shape({}).isRequired,
};

TeamElement.defaultProps = {
  position: null,
};

export default TeamElement;
