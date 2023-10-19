import React from 'react';
import { VideoTag } from 'react-video-tag';
import PropTypes from "prop-types";

const Video = () => {
  return (
    <VideoTag src='/Video/video.mp4' poster={''}   autoPlay={true}
    muted={true} />
  );
};

Video.propTypes = {
  type: PropTypes.string,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  loop: PropTypes.bool,
};

Video.defaultProps = {
  type: 'video/mp4',
  muted: true,
  autoPlay: true,
  playsInline: true,
  loop: true,
};

export default Video;


