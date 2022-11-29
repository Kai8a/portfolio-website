import React from "react";
import PropTypes from "prop-types";
import './youtube.css'
import Socials from "./socials";

const YoutubeEmbed = ({ embedId }) => (
    <section id='youtube'>
      <h5>Watch the latest from</h5>
      <h2>übersect</h2>
      <Socials />
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </section>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;