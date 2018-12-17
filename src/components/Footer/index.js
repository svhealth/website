import React from "react";
import capitalize from "lodash/capitalize";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Link from "root/components/Link";
import Button from "root/components/Button";
import Logo from "root/components/Logo";
import facebook from "root/assets/images/facebook.svg";
import linkedIn from "root/assets/images/linkedin.svg";
import twitter from "root/assets/images/twitter.svg";
import instagram from "root/assets/images/instagram.svg";
import Contact from "root/components/Contact";

import "./index.css";

const socialLinks = [
  {
    name: "facebook",
    icon: facebook,
    url: "https://www.facebook.com/svhealthsoftware",
  },
  {
    name: "linkedIn",
    icon: linkedIn,
    url: "https://www.linkedin.com/company/svhealth",
  },
  {
    name: "twitter",
    icon: twitter,
    url: "https://twitter.com/sv_health",
  },
  {
    name: "instagram",
    icon: instagram,
    url: "https://www.instagram.com/sv_health/",
  },
];

const renderLink = link => {
  const linkUrl = link === "home" ? "/" : `/${link}`;

  return (
    <div styleName="link">
      <Link to={linkUrl} underlineColor="dark-blue" hover>
        <Typography color="dark-blue">{capitalize(link)}</Typography>
      </Link>
    </div>
  );
};

const Footer = () => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <div styleName="sitemap">
        <div styleName="lets-work">
          <Typography variant="h3" color="dark-blue">
            Let’s work together
          </Typography>
          <div styleName="lets-work-button">
            <Contact>
              <Button>
                <Typography weight="bold">Tell us everything</Typography>
              </Button>
            </Contact>
          </div>
        </div>

        <div styleName="links">
          <div styleName="links-group">
            {renderLink("home")}
            {renderLink("services")}
            {renderLink("company")}
          </div>

          <div styleName="links-group">
            {renderLink("blog")}
            <Contact>
              <Typography color="dark-blue">{capitalize("contact")}</Typography>
            </Contact>
          </div>
        </div>
      </div>

      <div styleName="separator-wrapper">
        <div styleName="separator" />
      </div>

      <div styleName="contacts">
        <div styleName="logo">
          <Logo color="light-blue" />
        </div>

        <div styleName="address first ">
          <Typography weight="bold" color="dark-blue">
            Braga, Portugal
          </Typography>

          <div styleName="address-copy">
            <Typography color="dark-blue">
              Polo de Negócios de Braga, Avenida D. João II 404, 4º andar, Sala
              45 4715-275 Braga
            </Typography>
          </div>
        </div>

        <div styleName="address second">
          <Typography weight="bold" color="dark-blue">
            Boston, USA
          </Typography>

          <div styleName="address-copy">
            <Typography color="dark-blue">
              CIC Cambridge, 1 Broadway, Cambridge, MA 02142, USA
            </Typography>
          </div>
        </div>

        <div styleName="social-icons">
          {socialLinks.map(socialIcon => (
            <a
              key={socialIcon.name}
              styleName="social-icon"
              href={socialIcon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socialIcon.icon} alt={`${socialIcon.name}-icon`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Footer;
