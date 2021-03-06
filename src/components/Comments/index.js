import React from "react";
import PropTypes from "prop-types";
/* Versions 1.0.7 and 1.0.8 of disqus-react freaking out with scroll position, please mantain 1.0.6. */
import { DiscussionEmbed } from "disqus-react";
import useDetectJavascript from "root/hooks/useDetectJavascript";

function Comments({ path, title }) {
  const hasJavascript = useDetectJavascript();

  if (!hasJavascript) return null;

  const disqusShortname = "auroradigital";
  const disqusConfig = {
    url:
      process.env.NODE_ENV === "development"
        ? `http://${disqusShortname}.disqus.com/${path}`
        : window.location.toString(),
    identifier: path,
    title,
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
}

Comments.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
