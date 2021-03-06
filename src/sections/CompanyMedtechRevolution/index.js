import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import PropTypes from "prop-types";
import ParallaxEffect from "root/components/ParallaxEffect";

import withQuery from "./withQuery";

import "./index.css";

const CompanyMedtechRevolution = ({ data }) => {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="container-top">
          <div styleName="text">
            <Typography variant="body" color="oxford-blue">
              We want to be a part of the new medtech revolution, we want
              software to be accessible and readily available to everyone in the
              world.
            </Typography>
          </div>
          <div styleName="right-image">
            <ParallaxEffect
              image={data.teamtalk.image.fluid}
              alt="team discussing important business"
            />
          </div>
        </div>

        <div styleName="container-bottom">
          <div styleName="left-image">
            <ParallaxEffect
              image={data.teamwork.image.fluid}
              alt="developers pair programming on a laptop"
            />
          </div>
          <div styleName="text">
            <Typography variant="body" color="oxford-blue">
              Most importantly, we want technology to improve people&apos;s
              lives, guiding them to a healthier and more sustainable lifestyle.
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

CompanyMedtechRevolution.propTypes = {
  data: PropTypes.shape({
    teamtalk: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    teamwork: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CompanyMedtechRevolution);
