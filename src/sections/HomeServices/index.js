import React from "react";
import { Parallax } from "react-scroll-parallax";

import PropTypes from "prop-types";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";

import BackgroundWave from "root/assets/images/home-services-wave.inline.svg";
import BackgroundWaveMobile from "root/assets/images/home-services-wave-mobile.inline.svg";
import withQuery from "./withQuery";

import "./index.css";

const HomeServices = ({ data }) => (
  <Section>
    <div styleName="root">
      <div styleName="concept-stategy">
        <div>
          <div styleName="image concept-image">
            <ParallaxEffect
              image={data.concept.image.fluid}
              alt="our team on a meeting"
            />
          </div>
          <div>
            <div styleName="image stategy-image">
              <ParallaxEffect
                image={data.stategy.image.fluid}
                alt="developers working on a whiteboard"
              />
            </div>
          </div>
        </div>
        <div styleName="code-design-growth">
          <div>
            <div styleName="image code-image">
              <ParallaxEffect
                image={data.concept.image.fluid}
                alt="our team on a meeting"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

HomeServices.propTypes = {
  data: PropTypes.shape({
    concept: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    stategy: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    code: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    design: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    growth: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(HomeServices);
